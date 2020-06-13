"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.install = void 0;
exports.install = function (hook, vm) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var facebook = vm.config.share.facebook != undefined ? '<a href="https://www.facebook.com/sharer.php?u=' + ((_a = vm.config.share.facebook.url) !== null && _a !== void 0 ? _a : window.location.href) + '" target="_blank" class="fab indigo" tooltip="Facebook"><i class="fa fa-facebook animated"></i></a>' : '';
    var reddit = vm.config.share.reddit != undefined ? '<a href="https://reddit.com/submit?url=' + ((_b = vm.config.share.reddit.url) !== null && _b !== void 0 ? _b : window.location.href) + '&title=' + ((_c = vm.config.share.reddit.title) !== null && _c !== void 0 ? _c : document.title) + '" target="_blank" class="fab red" tooltip="Reddit"><i class="fa fa-reddit animated"></i></a>' : '';
    var twitter = vm.config.share.twitter != undefined ? '<a href="https://twitter.com/intent/tweet?url=' + ((_d = vm.config.share.twitter.url) !== null && _d !== void 0 ? _d : window.location.href) + '&text=' + ((_e = vm.config.share.twitter.title) !== null && _e !== void 0 ? _e : document.title) + '" target="_blank" class="fab light-blue" tooltip="Twitter"><i class="fa fa-twitter animated"></i></a>' : '';
    var linkedin = vm.config.share.linkedin != undefined ? '<a href="https://www.linkedin.com/sharing/share-offsite/?url=' + ((_f = vm.config.share.linkedin.url) !== null && _f !== void 0 ? _f : window.location.href) + '" target="_blank" class="fab blue-linkedin" tooltip="Linked In"><i class="fa fa-linkedin animated"></i></a>' : '';
    var whatsapp = vm.config.share.whatsapp != undefined ? '<a href="whatsapp://send?text=' + ((_g = vm.config.share.whatsapp.title) !== null && _g !== void 0 ? _g : document.title) + '%20' + ((_h = vm.config.share.whatsapp.url) !== null && _h !== void 0 ? _h : window.location.href) + '" data-action="share/whatsapp/share" target="_blank" class="fab green" tooltip="Whatsapp"><i class="fa fa-whatsapp animated"></i></a>' : '';
    var telegram = vm.config.share.telegram != undefined ? '<a href="https://telegram.me/share/url?url=&' + ((_j = vm.config.share.telegram.url) !== null && _j !== void 0 ? _j : window.location.href) + 'text=' + ((_k = vm.config.share.telegram.title) !== null && _k !== void 0 ? _k : document.title) + '" target="_blank" class="fab black" tooltip="Telegram"><i class="fa fa-telegram animated"></i></a>' : '';
    var footer = [
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">',
        '<link rel="stylesheet" href="https://unpkg.com/mytest-share/assets/css/docsify-share.css">',
        '<div class="fabs">',
        reddit,
        linkedin,
        facebook,
        twitter,
        whatsapp,
        telegram,
        '<a target="_blank" class="fab light-green big-fab" tooltip="Share"><i class="fa fa-share-alt"></i></a>',
        '</div>'
    ].join('');
    var config = Object.assign({}, vm.config.share);
    hook.afterEach(function (html) {
        return html + footer;
    });
};
//# sourceMappingURL=docsify-share.js.map