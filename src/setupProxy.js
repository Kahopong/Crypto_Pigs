const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/assets?asset_contract_address=0x8661889Aa1D54504c3239744B800E79A7894a923&order_direction=asc", {
            target: "https://testnets-api.opensea.io",
            secure: false,
            changeOrigin: false
        })
    );
};