import { mix } from '../helpers/mixin.js';
import { BaseMixin } from './base.js';
import { OwnableMixin } from './ownable.js';
import { InjectableMixin } from './injectable.js';

export const ComponentMixin = (superClass) =>
    class extends mix(superClass).with(
        BaseMixin,
        InjectableMixin,
        OwnableMixin
    ) {};