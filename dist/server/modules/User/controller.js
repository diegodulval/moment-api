"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var errorHandler_1 = require("../../api/responses/errorHandler");
var sucessHandler_1 = require("../../api/responses/sucessHandler");
var dbErrorHandler_1 = require("../../config/dbErrorHandler");
var service_1 = require("./service");
var UserController = (function () {
    function UserController() {
    } //tslint:disable-line
    UserController.prototype.getAll = function (req, res) {
        service_1.default.getAll()
            .then(_.partial(sucessHandler_1.onSucess, res))
            .catch(_.partial(errorHandler_1.onError, res, "Erro ao buscar todos os usuários"));
    };
    UserController.prototype.createUser = function (req, res) {
        service_1.default.create(req.body)
            .then(_.partial(sucessHandler_1.onSucess, res))
            .catch(_.partial(dbErrorHandler_1.dbErrorHandler, res))
            .catch(_.partial(errorHandler_1.onError, res, "Erro ao inserir novo usuário"));
    };
    UserController.prototype.getById = function (req, res) {
        var userId = parseInt(req.params.id, 10);
        service_1.default.getById(userId)
            .then(_.partial(sucessHandler_1.onSucess, res))
            .catch(_.partial(errorHandler_1.onError, res, "Usuario não encontrado"));
    };
    UserController.prototype.updateUser = function (req, res) {
        var userId = parseInt(req.params.id, 10);
        var props = req.body;
        service_1.default.update(userId, props)
            .then(_.partial(sucessHandler_1.onSucess, res))
            .catch(_.partial(errorHandler_1.onError, res, "Erro ao atualizar usuário"));
    };
    UserController.prototype.deleteUser = function (req, res) {
        var userId = parseInt(req.params.id, 10);
        service_1.default.delete(userId)
            .then(_.partial(sucessHandler_1.onSucess, res))
            .catch(_.partial(errorHandler_1.onError, res, "Erro ao excluir usuário"));
    };
    return UserController;
}());
exports.default = UserController;
