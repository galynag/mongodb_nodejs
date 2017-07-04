/**
 * Created by Galina on 04.07.2017.
 */
const noteRoutes = require('./note_routes');

module.exports = function(app, db) {
    noteRoutes(app, db);
    // Тут, позже, будут и другие обработчики маршрутов
};