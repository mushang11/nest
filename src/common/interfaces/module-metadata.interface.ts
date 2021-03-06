import { NestModule } from './nest-module.interface';
import { Controller } from './controller.interface';

export interface ModuleMetadata {
    modules?: NestModule[];
    components?: any[];
    controllers?: Controller[] | any[];
    exports?: any[];
}
