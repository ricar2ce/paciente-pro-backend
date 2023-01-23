/**
 * ingreso router
 */

import { factories } from '@strapi/strapi';

//export default factories.createCoreRouter('api::ingreso.ingreso');

const { createCoreRouter } = require("@strapi/strapi").factories;
const defaultRouter = createCoreRouter("api::ingreso.ingreso");

const customRouter = (innerRouter, extraRoutes = []) => {
    let routes;
    return {
      get prefix() {
        return innerRouter.prefix;
      },
      get routes() {
        if (!routes) routes = innerRouter.routes.concat(extraRoutes);
        return routes;
      },
    };
  };
  
  const myExtraRoutes = [
    {
      method: "GET",
      path: "/ingresos/cantidadFallecidos/:salaId",
      handler: "api::ingreso.ingreso.cantidadFallecidos",
    },
    /*{
      method: "GET",
      path: "/stores/moreStuff",
      handler: "api::store.store.moreStuff",
    },*/
  ];

  module.exports = customRouter(defaultRouter, myExtraRoutes);