export const install = (hook: any, vm: any) => {
    let facebook = vm.config.share.facebook != undefined ? '<a href="https://www.facebook.com/sharer.php?u='+ (vm.config.share.whatsapp.url ?? window.location.href) +'" target="_blank" class="fab indigo" tooltip="Facebook"><i class="fa fa-facebook animated"></i></a>' : '';
    let reddit = vm.config.share.reddit != undefined ? '<a href="https://reddit.com/submit?url='+ (vm.config.share.reddit.url ?? window.location.href) +'&title='+ (vm.config.share.reddit.title ?? document.title) +'" target="_blank" class="fab red" tooltip="Reddit"><i class="fa fa-reddit animated"></i></a>' : '';
    let twitter = vm.config.share.twitter != undefined ? '<a href="https://twitter.com/intent/tweet?url='+ (vm.config.share.twitter.url ?? window.location.href) +'&text='+ (vm.config.share.twitter.title ?? document.title) +'" target="_blank" class="fab light-blue" tooltip="Twitter"><i class="fa fa-twitter animated"></i></a>' : '';
    let linkedin = vm.config.share.linkedin != undefined ? '<a href="https://www.linkedin.com/sharing/share-offsite/?url='+ (vm.config.share.linkedin.url ?? window.location.href) +'" target="_blank" class="fab blue-linkedin" tooltip="Linked In"><i class="fa fa-linkedin animated"></i></a>' : '';
    let whatsapp = vm.config.share.whatsapp != undefined ? '<a href="whatsapp://send?text='+ (vm.config.share.whatsapp.title ?? document.title) +'%20'+ (vm.config.share.whatsapp.url ?? window.location.href) +'" data-action="share/whatsapp/share" target="_blank" class="fab green" tooltip="Whatsapp"><i class="fa fa-whatsapp animated"></i></a>' : '';
    let telegram = vm.config.share.telegram != undefined ? '<a href="https://telegram.me/share/url?url=&'+ (vm.config.share.telegram.url ?? window.location.href) +'text='+ (vm.config.share.telegram.title ?? document.title) +'" data-action="share/whatsapp/share" target="_blank" class="fab black" tooltip="Telegram"><i class="fa fa-telegram animated"></i></a>' : '';

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
    
    const config = Object.assign(
        {},
        vm.config.share
    );

    hook.afterEach(function(html) {
        return html + footer;
    });
};
