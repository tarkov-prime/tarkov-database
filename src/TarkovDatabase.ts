import got, { ExtendOptions, Got } from 'got';
import { ItemCountsResponse } from './typings/responses/ItemCountsResponse';
import { ErrorResponse } from './typings/responses/ErrorResponse';
import { TokenResponse } from './typings/responses/TokenResponse';
import { ItemKind } from './enum/ItemKind';
import { ItemsMap } from './typings/tarkov/common/ItemsMap';

export class TarkovDatabase {
  static ROOT_URL =
    process.env.TARKOV_DATABASE_URL || 'https://api.tarkov-database.com';

  static TOKEN_ENDPOINT = 'v2/token';

  static ITEM_COUNTS_ENDPOINT = 'v2/item';

  api: Got;

  constructor(
    token: string,
    applicationName: string,
    ...options: Array<Got | ExtendOptions>
  ) {
    this.api = got.extend({
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': applicationName,
      },
      hooks: {
        // If response includes a 401, try to fetch a new token and retry
        afterResponse: [
          async (response, retryWithMergedOptions) => {
            const wasAuthenticating =
              response.url ===
              `${TarkovDatabase.ROOT_URL}/${TarkovDatabase.TOKEN_ENDPOINT}`;

            if (response.statusCode === 401 && !wasAuthenticating) {
              const updatedOptions = {
                headers: {
                  Authorization: `Bearer ${await this.getNewToken()}`,
                },
              };

              this.api.defaults.options = got.mergeOptions(
                this.api.defaults.options,
                updatedOptions,
              );

              return retryWithMergedOptions(updatedOptions);
            }

            return response;
          },
        ],
      },
      mutableDefaults: true,
      prefixUrl: TarkovDatabase.ROOT_URL,
      responseType: 'json',
      ...options,
    });
  }

  async request<Response>(path: string) {
    const { body } = await this.api.get<Response | ErrorResponse>(path);

    if ('status' in body) {
      throw new Error(
        `Server sent ${body.status} - ${body.message} - ${body.code}`,
      );
    }

    return body;
  }

  /**
   * Requests a new JWT using the previous JWT
   *
   * @returns New token
   */
  async getNewToken() {
    const tokenResponse = await this.request<TokenResponse>(
      TarkovDatabase.TOKEN_ENDPOINT,
    );

    return tokenResponse.token;
  }

  async getItemCounts() {
    const countsResponse = await this.request<ItemCountsResponse>(
      TarkovDatabase.ITEM_COUNTS_ENDPOINT,
    );

    return countsResponse.kinds;
  }

  async getItems<T extends ItemKind>(kind: T): Promise<Pick<ItemsMap, T>> {
    throw new Error('Unimplemented');
  }
}
