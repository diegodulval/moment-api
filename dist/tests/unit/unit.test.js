"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var service_1 = require("../../server/modules/User/service");
describe("Testes Unitarios do Controller", function () {
    describe("Método Create", function () {
        it("Deve criar um Usúario", function () {
            var newUser = {
                id: 500,
                name: "NewUser",
                email: "newuser@email.com",
                password: "pinkfloyd",
            };
            var user = new service_1.default();
            return user.create(newUser).then(function (data) {
                helpers_1.expect(data.dataValues).to.have.all.keys([
                    "email",
                    "id",
                    "name",
                    "password",
                    "updatedAt",
                    "createdAt",
                ]);
            });
        });
    });
    describe("Método GET Users", function () {
        it("Deve retornar uma lista com todos os Usúario", function () {
            var user = new service_1.default();
            return user.getAll().then(function (data) {
                helpers_1.expect(data).to.be.an("array");
                helpers_1.expect(data[0]).to.have.all.keys(["email", "id", "name", "password"]);
            });
        });
    });
    describe("Método Update", function () {
        it("Deve atualizar um Usúario", function () {
            var updateUser = {
                name: "UpdateUser",
                email: "updateuser@email.com",
            };
            var user = new service_1.default();
            return user.update(500, updateUser).then(function (data) {
                helpers_1.expect(data[0]).to.be.equal(1);
            });
        });
    });
    describe("Método getById", function () {
        it("Deve retornar um Usúario de acordo com o ID informado", function () {
            var user = new service_1.default();
            return user.getById(500).then(function (data) {
                helpers_1.expect(data).to.have.all.keys(["email", "id", "name", "password"]);
            });
        });
    });
    describe("Método getByEmail", function () {
        it("Deve retornar um Usúario de acordo com o ID informado", function () {
            var user = new service_1.default();
            return user.getByEmail("diego@email.com").then(function (data) {
                helpers_1.expect(data).to.have.all.keys(["email", "id", "name", "password"]);
            });
        });
    });
    describe("Método Delete", function () {
        it("Deve deletar um Usúario", function () {
            var user = new service_1.default();
            return user.delete(500).then(function (data) {
                helpers_1.expect(data).to.be.equal(1);
            });
        });
    });
});
