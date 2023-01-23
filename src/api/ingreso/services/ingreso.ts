/**
 * ingreso service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::ingreso.ingreso', ({ strapi }) =>  ({
    // Method 1: Creating an entirely new custom service
    async cantidadFallecidos(salaId): Promise<Number> {
      let fallecidos  = await strapi.entityService.find('api::paciente-pro.ingreso',{
        where: {
            motivo_baja: 2,
            sala_id: salaId
        }
      });    
      return fallecidos.length;
    },
  
    // Method 2: Wrapping a core service (leaves core logic in place)
    async find(...args) {  
      // Calling the default core controller
      const { results, pagination } = await super.find(...args);
  
      // some custom logic
      results.forEach(result => {
        result.counter = 1;
      });
  
      return { results, pagination };
    },
  
    // Method 3: Replacing a core service
    async findOne(entityId, params = {}) {
      return strapi.entityService.findOne('api::restaurant.restaurant', entityId, this.getFetchParams(params));
    }
  }));
