import { css } from "lit-element";

/*
 @font-face {
	font-family: 'ficons';
	src:
	  url('../ficons/fonts/ficons.woff?i6zokp') format('woff');
	font-weight: normal;
	font-style: normal;
	font-display: block;
}

[class^="ficon-"], [class*=" ficon-"] {
font - family: 'ficons'!important;
speak: none;
font - style: normal;
font - weight: normal;
font - variant: normal;
text - transform: none;
line - height: 1;

-webkit - font - smoothing: antialiased;
-moz - osx - font - smoothing: grayscale;
}
*/

export const fontFicons = css`

.ficon-activity:before {
  content: "\\e90a";
}
.ficon-airplay:before {
  content: "\\e90b";
}
.ficon-alert-circle:before {
  content: "\\e929";
}
.ficon-alert-octagon:before {
  content: "\\e92a";
}
.ficon-alert-triangle:before {
  content: "\\e92e";
}
.ficon-align-center:before {
  content: "\\e92f";
}
.ficon-align-justify:before {
  content: "\\e930";
}
.ficon-align-left:before {
  content: "\\e931";
}
.ficon-align-right:before {
  content: "\\e932";
}
.ficon-anchor:before {
  content: "\\e933";
}
.ficon-aperture:before {
  content: "\\e934";
}
.ficon-archive:before {
  content: "\\e935";
}
.ficon-arrow-down1:before {
  content: "\\e936";
}
.ficon-arrow-down-circle:before {
  content: "\\e937";
}
.ficon-arrow-down-left:before {
  content: "\\e938";
}
.ficon-arrow-down-right:before {
  content: "\\e939";
}
.ficon-arrow-left1:before {
  content: "\\e93a";
}
.ficon-arrow-left-circle:before {
  content: "\\e93b";
}
.ficon-arrow-right1:before {
  content: "\\e93c";
}
.ficon-arrow-right-circle:before {
  content: "\\e93d";
}
.ficon-arrow-up1:before {
  content: "\\e93e";
}
.ficon-arrow-up-circle:before {
  content: "\\e93f";
}
.ficon-arrow-up-left:before {
  content: "\\e940";
}
.ficon-arrow-up-right:before {
  content: "\\e941";
}
.ficon-at-sign:before {
  content: "\\e942";
}
.ficon-award:before {
  content: "\\e943";
}
.ficon-bar-chart:before {
  content: "\\e944";
}
.ficon-bar-chart-2:before {
  content: "\\e945";
}
.ficon-battery:before {
  content: "\\e946";
}
.ficon-battery-charging:before {
  content: "\\e947";
}
.ficon-bell:before {
  content: "\\e948";
}
.ficon-bell-off:before {
  content: "\\e949";
}
.ficon-bluetooth:before {
  content: "\\e94a";
}
.ficon-bold1:before {
  content: "\\e94b";
}
.ficon-book:before {
  content: "\\e94c";
}
.ficon-book-open:before {
  content: "\\e94d";
}
.ficon-bookmark:before {
  content: "\\e94e";
}
.ficon-box:before {
  content: "\\e94f";
}
.ficon-briefcase:before {
  content: "\\e950";
}
.ficon-calendar:before {
  content: "\\e951";
}
.ficon-calendar-next:before {
  content: "\\ea49";
}
.ficon-calendar-prev:before {
  content: "\\ea4a";
}
.ficon-camera:before {
  content: "\\e952";
}
.ficon-camera-off:before {
  content: "\\e953";
}
.ficon-cast:before {
  content: "\\e954";
}
.ficon-check-circle:before {
  content: "\\e956";
}
.ficon-check-square:before {
  content: "\\e957";
}
.ficon-chevron-down:before {
  content: "\\e958";
}
.ficon-chevron-left:before {
  content: "\\e959";
}
.ficon-chevron-right:before {
  content: "\\e95a";
}
.ficon-chevron-up:before {
  content: "\\e95b";
}
.ficon-chevrons-down:before {
  content: "\\e95c";
}
.ficon-chevrons-left:before {
  content: "\\e95d";
}
.ficon-chevrons-right:before {
  content: "\\e95e";
}
.ficon-chevrons-up:before {
  content: "\\e95f";
}
.ficon-chevron-dual-ver:before {
  content: "\\ea4e";
}
.ficon-chevron-dual-hor:before {
  content: "\\ea4f";
}
.ficon-chrome:before {
  content: "\\e960";
}
.ficon-circle:before {
  content: "\\e961";
}
.ficon-clipboard:before {
  content: "\\e962";
}
.ficon-clock:before {
  content: "\\e963";
}
.ficon-clock-action:before {
  content: "\\ea4d";
}
.ficon-cloud:before {
  content: "\\e964";
}
.ficon-cloud-drizzle:before {
  content: "\\e965";
}
.ficon-cloud-lightning:before {
  content: "\\e966";
}
.ficon-cloud-off:before {
  content: "\\e967";
}
.ficon-cloud-rain:before {
  content: "\\e968";
}
.ficon-cloud-snow:before {
  content: "\\e969";
}
.ficon-code:before {
  content: "\\e96a";
}
.ficon-codepen:before {
  content: "\\e96b";
}
.ficon-codesandbox:before {
  content: "\\e96c";
}
.ficon-coffee:before {
  content: "\\e96d";
}
.ficon-columns:before {
  content: "\\e96e";
}
.ficon-command:before {
  content: "\\e96f";
}
.ficon-compass:before {
  content: "\\e970";
}
.ficon-copy1:before {
  content: "\\e971";
}
.ficon-corner-down-left:before {
  content: "\\e972";
}
.ficon-corner-down-right:before {
  content: "\\e973";
}
.ficon-corner-left-down:before {
  content: "\\e974";
}
.ficon-corner-left-up:before {
  content: "\\e975";
}
.ficon-corner-right-down:before {
  content: "\\e976";
}
.ficon-corner-right-up:before {
  content: "\\e977";
}
.ficon-corner-up-left:before {
  content: "\\e978";
}
.ficon-corner-up-right:before {
  content: "\\e979";
}
.ficon-cpu:before {
  content: "\\e97a";
}
.ficon-credit-card:before {
  content: "\\e97b";
}
.ficon-crop:before {
  content: "\\e97c";
}
.ficon-crosshair:before {
  content: "\\e97d";
}
.ficon-database:before {
  content: "\\e97e";
}
.ficon-delete:before {
  content: "\\e97f";
}
.ficon-disc:before {
  content: "\\e980";
}
.ficon-dollar-sign:before {
  content: "\\e981";
}
.ficon-download:before {
  content: "\\e982";
}
.ficon-download-cloud:before {
  content: "\\e983";
}
.ficon-droplet:before {
  content: "\\e984";
}
.ficon-edit:before {
  content: "\\e985";
}
.ficon-edit-2:before {
  content: "\\e986";
}
.ficon-edit-3:before {
  content: "\\e987";
}
.ficon-external-link1:before {
  content: "\\e988";
}
.ficon-eye1:before {
  content: "\\e989";
}
.ficon-eye-off:before {
  content: "\\e98a";
}
.ficon-facebook1:before {
  content: "\\e98b";
}
.ficon-fast-forward:before {
  content: "\\e98c";
}
.ficon-feather:before {
  content: "\\e98d";
}
.ficon-figma:before {
  content: "\\e98e";
}
.ficon-file:before {
  content: "\\e98f";
}
.ficon-file-minus:before {
  content: "\\e990";
}
.ficon-file-plus:before {
  content: "\\e991";
}
.ficon-file-text:before {
  content: "\\e992";
}
.ficon-film:before {
  content: "\\e993";
}
.ficon-flag:before {
  content: "\\e995";
}
.ficon-folder1:before {
  content: "\\e996";
}
.ficon-folder-minus:before {
  content: "\\e997";
}
.ficon-folder-plus:before {
  content: "\\e998";
}
.ficon-framer:before {
  content: "\\e999";
}
.ficon-frown:before {
  content: "\\e99a";
}
.ficon-gift:before {
  content: "\\e99b";
}
.ficon-git-branch:before {
  content: "\\e99c";
}
.ficon-git-commit:before {
  content: "\\e99d";
}
.ficon-git-merge:before {
  content: "\\e99e";
}
.ficon-git-pull-request:before {
  content: "\\e99f";
}
.ficon-github:before {
  content: "\\e9a0";
}
.ficon-gitlab:before {
  content: "\\e9a1";
}
.ficon-globe1:before {
  content: "\\e9a2";
}
.ficon-grid:before {
  content: "\\e9a3";
}
.ficon-hard-drive:before {
  content: "\\e9a4";
}
.ficon-hash:before {
  content: "\\e9a5";
}
.ficon-headphones:before {
  content: "\\e9a6";
}
.ficon-heart:before {
  content: "\\e9a7";
}
.ficon-help-circle:before {
  content: "\\e9a8";
}
.ficon-hexagon:before {
  content: "\\e9a9";
}
.ficon-home:before {
  content: "\\e9aa";
}
.ficon-image1:before {
  content: "\\e9ab";
}
.ficon-inbox:before {
  content: "\\e9ac";
}
.ficon-info1:before {
  content: "\\e9ad";
}
.ficon-instagram:before {
  content: "\\e9ae";
}
.ficon-italic1:before {
  content: "\\e9af";
}
.ficon-key1:before {
  content: "\\e9b0";
}
.ficon-layers:before {
  content: "\\e9b1";
}
.ficon-layout:before {
  content: "\\e9b2";
}
.ficon-life-buoy:before {
  content: "\\e9b3";
}
.ficon-link1:before {
  content: "\\e9b4";
}
.ficon-link-2:before {
  content: "\\e9b5";
}
.ficon-linkedin1:before {
  content: "\\e9b6";
}
.ficon-list1:before {
  content: "\\e9b7";
}
.ficon-loader:before {
  content: "\\e9b8";
}
.ficon-lock:before {
  content: "\\e9b9";
}
.ficon-log-in:before {
  content: "\\e9ba";
}
.ficon-log-out:before {
  content: "\\e9bb";
}
.ficon-mail:before {
  content: "\\e9bc";
}
.ficon-map:before {
  content: "\\e9bd";
}
.ficon-map-pin:before {
  content: "\\e9be";
}
.ficon-maximize1:before {
  content: "\\e9bf";
}
.ficon-maximize-2:before {
  content: "\\e9c0";
}
.ficon-meh:before {
  content: "\\e9c1";
}
.ficon-menu:before {
  content: "\\e9c2";
}
.ficon-message-circle:before {
  content: "\\e9c3";
}
.ficon-message-square:before {
  content: "\\e9c4";
}
.ficon-mic:before {
  content: "\\e9c5";
}
.ficon-mic-off:before {
  content: "\\e9c6";
}
.ficon-minimize1:before {
  content: "\\e9c7";
}
.ficon-minimize-2:before {
  content: "\\e9c8";
}
.ficon-minus:before {
  content: "\\e9c9";
}
.ficon-minus-circle:before {
  content: "\\e9ca";
}
.ficon-minus-square:before {
  content: "\\e9cb";
}
.ficon-monitor:before {
  content: "\\e9cc";
}
.ficon-moon:before {
  content: "\\e9cd";
}
.ficon-more-horizontal:before {
  content: "\\e9ce";
}
.ficon-more-vertical:before {
  content: "\\e9cf";
}
.ficon-mouse-pointer:before {
  content: "\\e9d0";
}
.ficon-move1:before {
  content: "\\e9d1";
}
.ficon-music:before {
  content: "\\e9d2";
}
.ficon-navigation:before {
  content: "\\e9d3";
}
.ficon-navigation-2:before {
  content: "\\e9d4";
}
.ficon-octagon:before {
  content: "\\e9d5";
}
.ficon-package:before {
  content: "\\e9d6";
}
.ficon-paperclip:before {
  content: "\\e9d7";
}
.ficon-pause:before {
  content: "\\e9d8";
}
.ficon-pause-circle:before {
  content: "\\e9d9";
}
.ficon-pen-tool:before {
  content: "\\e9da";
}
.ficon-percent:before {
  content: "\\e9db";
}
.ficon-phone:before {
  content: "\\e9dc";
}
.ficon-phone-call:before {
  content: "\\e9dd";
}
.ficon-phone-forwarded:before {
  content: "\\e9de";
}
.ficon-phone-incoming:before {
  content: "\\e9df";
}
.ficon-phone-missed:before {
  content: "\\e9e0";
}
.ficon-phone-off:before {
  content: "\\e9e1";
}
.ficon-phone-outgoing:before {
  content: "\\e9e2";
}
.ficon-pie-chart:before {
  content: "\\e9e3";
}
.ficon-play:before {
  content: "\\e9e4";
}
.ficon-play-circle:before {
  content: "\\e9e5";
}
.ficon-filter1:before {
  content: "\\e994";
}
.ficon-plus1:before {
  content: "\\e9e6";
}
.ficon-x:before {
  content: "\\ea3b";
}
.ficon-close:before {
  content: "\\ea3b";
}
.ficon-check:before {
  content: "\\e955";
}
.ficon-plus-circle:before {
  content: "\\e9e7";
}
.ficon-plus-square:before {
  content: "\\e9e8";
}
.ficon-pocket:before {
  content: "\\e9e9";
}
.ficon-power:before {
  content: "\\e9ea";
}
.ficon-printer:before {
  content: "\\e9eb";
}
.ficon-radio:before {
  content: "\\e9ec";
}
.ficon-radio-left:before {
  content: "\\ea4b";
}
.ficon-radio-right:before {
  content: "\\ea4c";
}
.ficon-refresh-ccw:before {
  content: "\\e9ed";
}
.ficon-refresh-cw:before {
  content: "\\e9ee";
}
.ficon-repeat:before {
  content: "\\e9ef";
}
.ficon-switch-view:before {
  content: "\\ea44";
}
.ficon-rewind:before {
  content: "\\e9f0";
}
.ficon-rotate-ccw:before {
  content: "\\e9f1";
}
.ficon-rotate-cw:before {
  content: "\\e9f2";
}
.ficon-rss:before {
  content: "\\e9f3";
}
.ficon-save:before {
  content: "\\e9f4";
}
.ficon-scissors:before {
  content: "\\e9f5";
}
.ficon-search1:before {
  content: "\\e9f6";
}
.ficon-send:before {
  content: "\\e9f7";
}
.ficon-server:before {
  content: "\\e9f8";
}
.ficon-timeline:before {
  content: "\\ea45";
}
.ficon-settings1:before {
  content: "\\e9f9";
}
.ficon-publish:before {
  content: "\\ea47";
}
.ficon-published:before {
  content: "\\ea48";
}
.ficon-share:before {
  content: "\\e9fa";
}
.ficon-share-2:before {
  content: "\\e9fb";
}
.ficon-shield:before {
  content: "\\e9fc";
}
.ficon-shield-off:before {
  content: "\\e9fd";
}
.ficon-shopping-bag:before {
  content: "\\e9fe";
}
.ficon-shopping-cart:before {
  content: "\\e9ff";
}
.ficon-shuffle1:before {
  content: "\\ea00";
}
.ficon-sidebar:before {
  content: "\\ea01";
}
.ficon-skip-back:before {
  content: "\\ea02";
}
.ficon-skip-forward:before {
  content: "\\ea03";
}
.ficon-slack:before {
  content: "\\ea04";
}
.ficon-slash:before {
  content: "\\ea05";
}
.ficon-sliders:before {
  content: "\\ea06";
}
.ficon-smartphone:before {
  content: "\\ea07";
}
.ficon-smile:before {
  content: "\\ea08";
}
.ficon-speaker:before {
  content: "\\ea09";
}
.ficon-square:before {
  content: "\\ea0a";
}
.ficon-star:before {
  content: "\\ea0b";
}
.ficon-stop-circle:before {
  content: "\\ea0c";
}
.ficon-sun:before {
  content: "\\ea0d";
}
.ficon-sunrise:before {
  content: "\\ea0e";
}
.ficon-sunset:before {
  content: "\\ea0f";
}
.ficon-tablet:before {
  content: "\\ea10";
}
.ficon-tag:before {
  content: "\\ea11";
}
.ficon-target:before {
  content: "\\ea12";
}
.ficon-terminal:before {
  content: "\\ea13";
}
.ficon-thermometer:before {
  content: "\\ea14";
}
.ficon-thumbs-down:before {
  content: "\\ea15";
}
.ficon-thumbs-up:before {
  content: "\\ea16";
}
.ficon-toggle-left:before {
  content: "\\ea17";
}
.ficon-toggle-right:before {
  content: "\\ea18";
}
.ficon-tool:before {
  content: "\\ea19";
}
.ficon-trash1:before {
  content: "\\ea1a";
}
.ficon-trash-2:before {
  content: "\\ea1b";
}
.ficon-trello:before {
  content: "\\ea1c";
}
.ficon-trending-down:before {
  content: "\\ea1d";
}
.ficon-trending-up:before {
  content: "\\ea1e";
}
.ficon-triangle:before {
  content: "\\ea1f";
}
.ficon-truck:before {
  content: "\\ea20";
}
.ficon-tv:before {
  content: "\\ea21";
}
.ficon-twitch:before {
  content: "\\ea22";
}
.ficon-twitter1:before {
  content: "\\ea23";
}
.ficon-type:before {
  content: "\\ea24";
}
.ficon-umbrella:before {
  content: "\\ea25";
}
.ficon-underline:before {
  content: "\\ea26";
}
.ficon-unlock:before {
  content: "\\ea27";
}
.ficon-upload:before {
  content: "\\ea28";
}
.ficon-upload-cloud:before {
  content: "\\ea29";
}
.ficon-user1:before {
  content: "\\ea2a";
}
.ficon-user-check:before {
  content: "\\ea2b";
}
.ficon-user-minus:before {
  content: "\\ea2c";
}
.ficon-user-plus:before {
  content: "\\ea2d";
}
.ficon-user-x:before {
  content: "\\ea2e";
}
.ficon-user-nonpresent:before {
  content: "\\ea46";
}
.ficon-users1:before {
  content: "\\ea2f";
}
.ficon-video:before {
  content: "\\ea30";
}
.ficon-video-off:before {
  content: "\\ea31";
}
.ficon-voicemail:before {
  content: "\\ea32";
}
.ficon-volume:before {
  content: "\\ea33";
}
.ficon-volume-1:before {
  content: "\\ea34";
}
.ficon-volume-2:before {
  content: "\\ea35";
}
.ficon-volume-x:before {
  content: "\\ea36";
}
.ficon-watch:before {
  content: "\\ea37";
}
.ficon-wifi:before {
  content: "\\ea38";
}
.ficon-wifi-off:before {
  content: "\\ea39";
}
.ficon-wind:before {
  content: "\\ea3a";
}
.ficon-x-circle:before {
  content: "\\ea3c";
}
.ficon-x-octagon:before {
  content: "\\ea3d";
}
.ficon-x-square:before {
  content: "\\ea3e";
}
.ficon-youtube1:before {
  content: "\\ea3f";
}
.ficon-zap:before {
  content: "\\ea40";
}
.ficon-zap-off:before {
  content: "\\ea41";
}
.ficon-zoom-in:before {
  content: "\\ea42";
}
.ficon-zoom-out:before {
  content: "\\ea43";
}
.ficon-previous-entry:before {
  content: "\\e900";
}
.ficon-employee-in:before {
  content: "\\e806";
}
.ficon-employee-out:before {
  content: "\\e807";
}
.ficon-employee-visitor:before {
  content: "\\e808";
}
.ficon-blocked:before {
  content: "\\e800";
}
.ficon-clock2:before {
  content: "\\e801";
}
.ficon-erase2:before {
  content: "\\e805";
}
.ficon-trash:before {
  content: "\\e6a6";
}
.ficon-clean:before {
  content: "\\e697";
}
.ficon-state-success:before {
  content: "\\e69f";
}
.ficon-state-warning:before {
  content: "\\e6a0";
}
.ficon-state-error:before {
  content: "\\e6a3";
}
.ficon-state-closure:before {
  content: "\\e695";
}
.ficon-erase:before {
  content: "\\e67c";
}
.ficon-enter:before {
  content: "\\e802";
}
.ficon-exit:before {
  content: "\\e803";
}
.ficon-history:before {
  content: "\\e804";
}
.ficon-folder-close:before {
  content: "\\e6b4";
}
.ficon-folder-open:before {
  content: "\\e6b5";
}
.ficon-restore:before {
  content: "\\e6af";
}
.ficon-maximize:before {
  content: "\\e6b0";
}
.ficon-azure:before {
  content: "\\e0d8";
}
.ficon-google:before {
  content: "\\e92c";
}
.ficon-youtube:before {
  content: "\\e92d";
}
.ficon-twitter:before {
  content: "\\e6aa";
}
.ficon-linkedin:before {
  content: "\\e6ab";
}
.ficon-facebook:before {
  content: "\\e6ac";
}
.ficon-windows8:before {
  content: "\\e6ad";
}
.ficon-pin:before {
  content: "\\e6a5";
}
.ficon-user-menu-icon:before {
  content: "\\e6a4";
}
.ficon-post:before {
  content: "\\e6a1";
}
.ficon-non-validate:before {
  content: "\\e6a2";
}
.ficon-departments:before {
  content: "\\e69b";
}
.ficon-node-properties:before {
  content: "\\e69e";
}
.ficon-Information:before {
  content: "\\e62a";
}
.ficon-balances:before {
  content: "\\e692";
}
.ficon-reports-archive:before {
  content: "\\e6b8";
}
.ficon-report-realization:before {
  content: "\\e693";
}
.ficon-report-employees:before {
  content: "\\e694";
}
.ficon-weekly-report:before {
  content: "\\e691";
}
.ficon-job-posting:before {
  content: "\\e64e";
}
.ficon-envelope:before {
  content: "\\e603";
}
.ficon-envelope2:before {
  content: "\\e63f";
}
.ficon-schedule2:before {
  content: "\\e607";
}
.ficon-schedule:before {
  content: "\\e606";
}
.ficon-transfer-basic-schedule-to-realized-hours:before {
  content: "\\e68c";
}
.ficon-transfer-work-schedule-to-basic-schedule:before {
  content: "\\e68d";
}
.ficon-transfer-basic-schedules-to-work-schedules:before {
  content: "\\e68e";
}
.ficon-smart-transfer-scheduled-to-realized-hours:before {
  content: "\\e68f";
}
.ficon-transfer-scheduled-to-realized-hours:before {
  content: "\\e690";
}
.ficon-availability-schedule:before {
  content: "\\e63b";
}
.ficon-employee-basic-schedule:before {
  content: "\\e63c";
}
.ficon-employee-work-schedule:before {
  content: "\\e63d";
}
.ficon-school-schedule:before {
  content: "\\e63e";
}
.ficon-schedule-bank-holiday-wizard:before {
  content: "\\e64d";
}
.ficon-insert-new-date:before {
  content: "\\e671";
}
.ficon-help:before {
  content: "\\e687";
}
.ficon-node-weekly-schedule:before {
  content: "\\e688";
}
.ficon-holiday-entry-wizard:before {
  content: "\\e689";
}
.ficon-hours-weekly-realization-view:before {
  content: "\\e68a";
}
.ficon-call:before {
  content: "\\e685";
}
.ficon-clock-out:before {
  content: "\\e680";
}
.ficon-clock-in:before {
  content: "\\e681";
}
.ficon-info:before {
  content: "\\e682";
}
.ficon-tutorial:before {
  content: "\\e683";
}
.ficon-period-reports:before {
  content: "\\e684";
}
.ficon-threshold:before {
  content: "\\e67d";
}
.ficon-actual:before {
  content: "\\e67b";
}
.ficon-add-period:before {
  content: "\\e67a";
}
.ficon-hour-code:before {
  content: "\\e660";
}
.ficon-plus-viewer:before {
  content: "\\e662";
}
.ficon-statistics:before {
  content: "\\e665";
}
.ficon-agreement:before {
  content: "\\e679";
}
.ficon-agreement-daily:before {
  content: "\\e64c";
}
.ficon-agreement-weekly:before {
  content: "\\e64f";
}
.ficon-default-breaks:before {
  content: "\\e659";
}
.ficon-extra-opening-hours:before {
  content: "\\e65b";
}
.ficon-hours-daily-entry:before {
  content: "\\e65c";
}
.ficon-hours-weekly-entry:before {
  content: "\\e65d";
}
.ficon-node-daily-schedule:before {
  content: "\\e65e";
}
.ficon-node-settings:before {
  content: "\\e65f";
}
.ficon-period-report:before {
  content: "\\e6b9";
}
.ficon-employees-report:before {
  content: "\\e6ba";
}
.ficon-schedule-report:before {
  content: "\\e6bb";
}
.ficon-realization-report:before {
  content: "\\e6bc";
}
.ficon-financial-report:before {
  content: "\\e6bd";
}
.ficon-system-report:before {
  content: "\\e6be";
}
.ficon-custom-report:before {
  content: "\\e6bf";
}
.ficon-automation-report:before {
  content: "\\e6c0";
}
.ficon-security:before {
  content: "\\e66c";
}
.ficon-cost:before {
  content: "\\e678";
}
.ficon-turnovers:before {
  content: "\\e66e";
}
.ficon-copy:before {
  content: "\\e677";
}
.ficon-execute-calculation:before {
  content: "\\e676";
}
.ficon-go-to-last:before {
  content: "\\e675";
}
.ficon-hide-show:before {
  content: "\\e674";
}
.ficon-hours:before {
  content: "\\e673";
}
.ficon-insert-notes:before {
  content: "\\e6b7";
}
.ficon-include-subnodes:before {
  content: "\\e672";
}
.ficon-contract:before {
  content: "\\e698";
}
.ficon-contract-addendum:before {
  content: "\\e699";
}
.ficon-reports:before {
  content: "\\e66b";
}
.ficon-note-memo:before {
  content: "\\e669";
}
.ficon-file-pdf:before {
  content: "\\e923";
}
.ficon-reprocess-day-week:before {
  content: "\\e668";
}
.ficon-folder:before {
  content: "\\e6a7";
}
.ficon-move:before {
  content: "\\e91c";
}
.ficon-reprocess-selected-entry:before {
  content: "\\e618";
}
.ficon-suitcase:before {
  content: "\\e608";
}
.ficon-special-leave:before {
  content: "\\e663";
}
.ficon-vacations:before {
  content: "\\e666";
}
.ficon-vacation-request:before {
  content: "\\e66f";
}
.ficon-vacation-status:before {
  content: "\\e696";
}
.ficon-add-vacation-request:before {
  content: "\\e69a";
}
.ficon-vacation-entry-wizard:before {
  content: "\\e68b";
}
.ficon-switch:before {
  content: "\\e664";
}
.ficon-general:before {
  content: "\\e657";
}
.ficon-export:before {
  content: "\\e650";
}
.ficon-import:before {
  content: "\\e651";
}
.ficon-insert:before {
  content: "\\e652";
}
.ficon-reset:before {
  content: "\\e655";
}
.ficon-validate:before {
  content: "\\e656";
}
.ficon-default:before {
  content: "\\e64a";
}
.ficon-node-status-cla:before {
  content: "\\e648";
}
.ficon-node-status-salary:before {
  content: "\\e649";
}
.ficon-close-3:before {
  content: "\\e642";
}
.ficon-close-2:before {
  content: "\\e601";
}
.ficon-cb-border:before {
  content: "\\e643";
}
.ficon-tick:before {
  content: "\\e609";
}
.ficon-cb-checked:before {
  content: "\\e644";
}
.ficon-cb-inner:before {
  content: "\\e645";
}
.ficon-radio-inner:before {
  content: "\\e646";
}
.ficon-radio-border:before {
  content: "\\e647";
}
.ficon-settings:before {
  content: "\\e62e";
}
.ficon-default2:before {
  content: "\\e64b";
}
.ficon-warning:before {
  content: "\\e667";
}
.ficon-warning-minus:before {
  content: "\\e640";
}
.ficon-warning-plus:before {
  content: "\\e641";
}
.ficon-stroke-arrow-right:before {
  content: "\\e638";
}
.ficon-dropdown-arrow:before {
  content: "\\e63a";
}
.ficon-branch:before {
  content: "\\e635";
}
.ficon-bullit:before {
  content: "\\e636";
}
.ficon-country:before {
  content: "\\e637";
}
.ficon-organisation:before {
  content: "\\e639";
}
.ficon-key:before {
  content: "\\e634";
}
.ficon-holiday:before {
  content: "\\e632";
}
.ficon-illness:before {
  content: "\\e633";
}
.ficon-solid-minus:before {
  content: "\\e906";
}
.ficon-solid-plus:before {
  content: "\\e907";
}
.ficon-plus:before {
  content: "\\e61a";
}
.ficon-circle-plus:before {
  content: "\\e610";
}
.ficon-circle-minus:before {
  content: "\\e631";
}
.ficon-squared-plus:before {
  content: "\\e908";
}
.ficon-squared-minus:before {
  content: "\\e909";
}
.ficon-search-node:before {
  content: "\\e630";
}
.ficon-card-number:before {
  content: "\\e62f";
}
.ficon-hours-entry:before {
  content: "\\e62d";
}
.ficon-budget:before {
  content: "\\e623";
}
.ficon-card-reader:before {
  content: "\\e628";
}
.ficon-opening-hours:before {
  content: "\\e62b";
}
.ficon-tasks:before {
  content: "\\e62c";
}
.ficon-manual-operations:before {
  content: "\\e620";
}
.ficon-summary:before {
  content: "\\e621";
}
.ficon-move-to-last:before {
  content: "\\e622";
}
.ficon-history-log:before {
  content: "\\e624";
}
.ficon-cao:before {
  content: "\\e658";
}
.ficon-illness-prefill:before {
  content: "\\e625";
}
.ficon-exception:before {
  content: "\\e626";
}
.ficon-agreement2:before {
  content: "\\e629";
}
.ficon-list:before {
  content: "\\e614";
}
.ficon-prefill:before {
  content: "\\e619";
}
.ficon-pencil:before {
  content: "\\e61b";
}
.ficon-transfer:before {
  content: "\\e61d";
}
.ficon-legend:before {
  content: "\\e61e";
}
.ficon-arrow-down:before {
  content: "\\e600";
}
.ficon-arrow-up:before {
  content: "\\e3b4";
}
.ficon-arrow-right2:before {
  content: "\\e3b5";
}
.ficon-arrow-down2:before {
  content: "\\e3b6";
}
.ficon-arrow-left2:before {
  content: "\\e3b7";
}
.ficon-filter:before {
  content: "\\e611";
}
.ficon-other:before {
  content: "\\e612";
}
.ficon-sum:before {
  content: "\\e613";
}
.ficon-totals:before {
  content: "\\e61f";
}
.ficon-corner:before {
  content: "\\e615";
}
.ficon-question-mark:before {
  content: "\\e60f";
}
.ficon-corner2:before {
  content: "\\e60e";
}
.ficon-users:before {
  content: "\\e186";
}
.ficon-search-user:before {
  content: "\\e661";
}
.ficon-user:before {
  content: "\\e60b";
}
.ficon-add-user:before {
  content: "\\e627";
}
.ficon-employee-list:before {
  content: "\\e65a";
}
.ficon-additional-employee-information:before {
  content: "\\e69c";
}
.ficon-personal-data:before {
  content: "\\e69d";
}
.ficon-employee-end-balance:before {
  content: "\\e670";
}
.ficon-user-menu-open:before {
  content: "\\e60c";
}
.ficon-user-settings:before {
  content: "\\e60d";
}
.ficon-temp-employees:before {
  content: "\\e66d";
}
.ficon-user-menu:before {
  content: "\\e60a";
}
.ficon-employee-badge-open:before {
  content: "\\e6b3";
}
.ficon-employee-badge:before {
  content: "\\e6b2";
}
.ficon-equal:before {
  content: "\\e602";
}
.ficon-note:before {
  content: "\\e604";
}
.ficon-realization:before {
  content: "\\e605";
}
.ficon-search:before {
  content: "\\e1ba";
}
.ficon-automate:before {
  content: "\\e1ed";
}
.ficon-fullscreen-exit-alt:before {
  content: "\\e901";
}
.ficon-fullscreen:before {
  content: "\\e902";
}
.ficon-minimize:before {
  content: "\\e6ae";
}
.ficon-magic-wand:before {
  content: "\\e903";
}
.ficon-vector:before {
  content: "\\e43e";
}
.ficon-dot-single:before {
  content: "\\e91a";
}
.ficon-dot-multi:before {
  content: "\\e91b";
}
.ficon-square-single:before {
  content: "\\e653";
}
.ficon-square-multi:before {
  content: "\\e654";
}
.ficon-layout-c2-v1:before {
  content: "\\e927";
}
.ficon-layout-c3-v3:before {
  content: "\\e926";
}
.ficon-layout-c3-v2:before {
  content: "\\e925";
}
.ficon-layout-c3-v1:before {
  content: "\\e924";
}
.ficon-layout-c1:before {
  content: "\\e928";
}
.ficon-equalizer:before {
  content: "\\e904";
}
.ficon-shuffle:before {
  content: "\\e905";
}
.ficon-translate:before {
  content: "\\e921";
}
.ficon-paste:before {
  content: "\\e91d";
}
.ficon-copy2:before {
  content: "\\e91e";
}
.ficon-period:before {
  content: "\\e92b";
}
.ficon-group-work:before {
  content: "\\e6b6";
}
.ficon-notifications:before {
  content: "\\e66a";
}
.ficon-cut:before {
  content: "\\e91f";
}
.ficon-chat:before {
  content: "\\e6b1";
}
.ficon-language2:before {
  content: "\\e922";
}
.ficon-globe:before {
  content: "\\e920";
}
.ficon-helper:before {
  content: "\\e90c";
}
.ficon-eye-slash:before {
  content: "\\e90d";
}
.ficon-eye:before {
  content: "\\e90e";
}
.ficon-image:before {
  content: "\\e90f";
}
.ficon-unlink:before {
  content: "\\e910";
}
.ficon-external-link:before {
  content: "\\e911";
}
.ficon-link:before {
  content: "\\e912";
}
.ficon-list-ol:before {
  content: "\\e913";
}
.ficon-list-ul:before {
  content: "\\e914";
}
.ficon-quote-right:before {
  content: "\\e915";
}
.ficon-quote-left:before {
  content: "\\e916";
}
.ficon-heading:before {
  content: "\\e917";
}
.ficon-italic:before {
  content: "\\e918";
}
.ficon-bold:before {
  content: "\\e919";
}

`