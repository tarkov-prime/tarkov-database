export type EffectPenalties = {
  healthMin?: number;
  healthMax?: number;
};

export type Effect = {
  name?: string;
  resourceCosts: number;
  fadeIn: number;
  fadeOut: number;
  chance: number;
  delay: number;
  duration: number;
  value: number;
  isPercent: boolean;
  removes: boolean;
  penalties: EffectPenalties;
};

export type Effects = Partial<
  Record<
    | 'energy'
    | 'energyRate'
    | 'hydration'
    | 'hydrationRate'
    | 'stamina'
    | 'staminaRate'
    | 'health'
    | 'healthRate'
    | 'lightBleeding'
    | 'heavyBleeding'
    | 'fracture'
    | 'contusion'
    | 'pain'
    | 'tunnelVision'
    | 'tremor'
    | 'toxication'
    | 'antidote'
    | 'radExposure'
    | 'bodyTemperature'
    | 'mobility'
    | 'recoil'
    | 'reloadSpeed'
    | 'lootSpeed'
    | 'unlockSpeed'
    | 'destroyedPart'
    | 'weightLimit'
    | 'damageModifier'
    | 'skill',
    Effect
  >
>;
