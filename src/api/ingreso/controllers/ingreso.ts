/**
 * ingreso controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::ingreso.ingreso', ({ strapi }): {} => ({
    
    async cantidadFallecidos(salaId: number): Promise<Number> {

        return  await strapi.service('api::ingreso.ingreso').cantidadFallecidos(salaId);
    }
    
}));
