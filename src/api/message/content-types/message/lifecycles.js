"use strict";

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        from: "no-reply@alexandrugorgos.com",
        to: "hello@alexandrugorgos.com",
        subject: "New message sent from Photo Algo",
        text: "Hi! You have a new message on https://photo-algo.herokuapp.com from Photo Algo. You might want to check it out",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
