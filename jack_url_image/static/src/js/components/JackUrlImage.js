// code:myaddons/jack_url_image/static/src/js/components/JackUrlImage.js
odoo.define("jack_url_image.JackUrlImage", function (require) {

    const FormRenderer = require("web.FormRenderer");
    const {Component} = owl;
    const {ComponentWrapper} = require("web.OwlCompatibility");

    class JackUrlImage extends Component {
        //
    }

    Object.assign(JackUrlImage, {           //新加内容
        template: "jack_url_image.JackUrlImage"    // 新加内容
    });                                            // 新加内容

    FormRenderer.include({
        async _render() {
            await this._super(...arguments);

            for (const element of this.el.querySelectorAll(".o_jack_url_image")) {
                (new ComponentWrapper(this, JackUrlImage))
                    .mount(element)
            }
        }
    });
});