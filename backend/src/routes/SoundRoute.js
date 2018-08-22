const SoundController = require("../controllers/SoundController");

class SoundRoute {
    constructor(app) {
        this.app = app;

        this.initRoutes();
    }

    initRoutes() {
        this.app.get("/sounds/:id", (req, res) => {
            SoundController.getSoundById(req, res);
        });

        this.app.post("/sounds", (req, res) => {
            SoundController.addSound(req, res);
        });

        this.app.put("/sounds/:id", (req, res) => {
            SoundController.editSound(req, res);
        });

        this.app.get("/splicer",(req,res) => {
            SoundController.getSplicerSounds(req,res);
        })
        this.app.get("/splicer/:id",(req,res) => {
            SoundController.getSoundsByType(req,res);
        })

        this.app.get("/sounds", (req, res) => {
            SoundController.getAll(req, res);
        });

        this.app.delete("/sounds/:id", (req, res) => {
            SoundController.deleteSound(req, res);
        });

        this.app.get("/sounds/audio/:id", (req, res) => {
            SoundController.getSoundDataById(req, res);
        });

    }
}

module.exports = SoundRoute;
