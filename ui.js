/* ========================
UIkit bootstrap-ecommerce.com 
===================== */

/* ==================== INCLUDE FONTS ======================= */
@import url("../fonts/roboto/font.css");
html {
  font-size: 15px; 
  height: 100%;
  width: 100%;
}
  
body {
  background-color: #f2f3f8;
  height: 100%;
  width: 100%;
}
.table td, .table th {
  padding: 0 !important;
}
/* ================== HELPERS  =================== */
a:hover {
  text-decoration: none; }

.img-wrap {
  text-align: center;
  display: block; }
  .img-wrap img {
    max-width: 100%; }

.icon-wrap {
  text-align: center; }

.zoom-in {
  -webkit-transition: -webkit-transform ease .3s;
  transition: -webkit-transform ease .3s;
  transition: transform ease .3s;
  transition: transform ease .3s, -webkit-transform ease .3s; }

.zoom-wrap:hover .zoom-in {
  -webkit-transform: scale(1.1);
          transform: scale(1.1);
  -webkit-transition: -webkit-transform ease .3s;
  transition: -webkit-transform ease .3s;
  transition: transform ease .3s;
  transition: transform ease .3s, -webkit-transform ease .3s; }

/* =================  DEFINED VARIABLES =================== */
.icon-xs, .icon-sm, .icon-md, .icon-lg {
  display: inline-block;
  text-align: center; }

.icon-xs {
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 16px; }

.icon-sm {
  width: 42px;
  height: 42px;
  line-height: 42px;
  font-size: 22px; }

.icon-md {
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 32px; }

.icon-lg {
  width: 80px;
  height: 80px;
  line-height: 80px;
  font-size: 42px; }

.img-xs, .img-sm, .img-md, .img-lg {
  -o-object-fit: cover;
     object-fit: cover; }

.img-xs {
  width: 40px;
  height: 40px; }

.img-sm {
  width: 80px;
  height: 80px; }

.img-md {
  width: 160px;
  height: 160px; }

.img-lg {
  width: 400px;
  height: 300px; }

.center-xy {
  top: 50%;
  left: 50%;
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%); }

.center-y {
  top: 50%;
  position: absolute;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%); }

.center-x {
  left: 50%;
  position: absolute;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%); }

.center {
  margin-left: auto;
  margin-right: auto; }

.overflow-h {
  overflow: hidden; }

.flip-h {
  -webkit-transform: scaleX(-1);
          transform: scaleX(-1); }

.card-body-lg {
  padding: 2rem; }

.shadow-in {
  -webkit-box-shadow: inset 0 2px 4px rgba(51, 51, 51, 0.4);
          box-shadow: inset 0 2px 4px rgba(51, 51, 51, 0.4); }

.vh-100 {
  height: 100vh; }

.vh-90 {
  height: 90vh; }

.vh-80 {
  height: 80vh; }

.vh-70 {
  height: 70vh; }

.vh-60 {
  height: 60vh; }

.vh-50 {
  height: 50vh; }

[class*="hover-"] {
  -webkit-transition: .5s;
  transition: .5s; }

.hover-shadow:hover {
  -webkit-box-shadow: 0 4px 15px rgba(51, 51, 51, 0.5);
          box-shadow: 0 4px 15px rgba(51, 51, 51, 0.5);
  -webkit-transition: .5s;
  transition: .5s; }

.hover-bg:hover {
  background: #007bff;
  /* For browsers that do not support gradients */
  /* For Safari 5.1 to 6.0 */
  /* For Opera 11.1 to 12.0 */
  /* For Firefox 3.6 to 15 */
  background: -webkit-gradient(linear, left top, right bottom, from(#007bff), to(#007bff));
  background: linear-gradient(to bottom right, #007bff, #007bff);
  /* Standard syntax */
  -webkit-transition: .5s;
  transition: .5s; }

.hover-zoom:hover {
  -webkit-transition: .5s;
  transition: .5s;
  -webkit-transform: scaleX(1);
          transform: scaleX(1); }

/* ========== input with icon ==========  */
.input-icon {
  position: relative; }
  .input-icon i + input, .input-icon i + select {
    padding-left: 36px; }
  .input-icon i {
    position: absolute;
    color: #ccc;
    z-index: 9;
    left: 7px;
    top: 4px;
    width: 24px;
    text-align: center;
    padding: 7px 0; }

.form-inline .form-control-sm[type="number"] {
  max-width: 100px; }

/* ========== borders ========== */
.border {
  border: 1px solid #dee2e6; }

.border-left-white {
  border-left: 1px solid rgba(255, 255, 255, 0.3); }

.border-right-white {
  border-right: 1px solid rgba(255, 255, 255, 0.3); }

.border-top-white {
  border-top: 1px solid rgba(255, 255, 255, 0.3); }

.border-bottom-white {
  border-bottom: 1px solid rgba(255, 255, 255, 0.3); }

.circle {
  border-radius: 100%; }

.round {
  border-radius: 200px; }

/* ============== spacing ============== */
.padding-y {
  padding-top: 32px;
  padding-bottom: 32px; }

.padding-top {
  padding-top: 32px; }

.padding-bottom {
  padding-bottom: 32px; }

.padding-y-lg {
  padding-top: 60px;
  padding-bottom: 50px; }

.padding-top-lg {
  padding-top: 60px; }

.padding-bottom-lg {
  padding-bottom: 60px; }

.padding-y-sm {
  padding-top: 16px;
  padding-bottom: 16px; }

.padding-top-sm {
  padding-top: 16px; }

.padding-bottom-sm {
  padding-bottom: 16px; }

.nopadding {
  padding: 0px; }

.p0 {
  padding: 0px; }

.p5 {
  padding: 5px; }

.p7 {
  padding: 7px; }

.p10 {
  padding: 10px; }

.p15 {
  padding: 15px; }

.p20 {
  padding: 20px; }

.p30 {
  padding: 30px; }

.p40 {
  padding: 40px; }

.p50 {
  padding: 50px; }

.p60 {
  padding: 60px; }

.nomargin {
  margin: 0px; }

.m0 {
  margin: 0px; }

.m5 {
  margin: 5px; }

.m7 {
  margin: 7px; }

.m10 {
  margin: 10px; }

.m15 {
  margin: 15px; }

.m30 {
  margin: 30px; }

.m40 {
  margin: 40px; }

.m50 {
  margin: 50px; }

.m60 {
  margin: 60px; }

.relative {
  position: relative; }

.absolute {
  position: absolute; }

var {
  font-style: normal; }

figure {
  margin-bottom: 0; }

.form-noborder input, .form-noborder select, .form-noborder .btn {
  border: none; }
.form-noborder select.form-control-lg:not([size]):not([multiple]) {
  height: 2.875rem; }

/* all clearfix */
article:after,
.form-group:after {
  display: block;
  clear: both;
  content: ""; }

.border-cols:not(:last-child) {
  border-bottom: 1px solid #dee2e6; }

.border-cols > [class*="col-"] {
  overflow: hidden;
  border-color: #dee2e6;
  border-width: 0 0 0 1px;
  border-style: solid; }

/* -------------------- small grid gutter --------------------- */
.row-sm {
  margin-right: -7px;
  margin-left: -7px;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap; }

.row-sm > [class^="col"] {
  padding-left: 7px;
  padding-right: 7px; }

.bg-white {
  background-color: #fff !important; }

.bg-white-50 {
  background-color: rgba(255, 255, 255, 0.5); }

.bg-dark-50 {
  background-color: rgba(0, 0, 0, 0.5); }

.bg-grad-primary {
  background: #3395ff;
  /* For browsers that do not support gradients */
  /* For Safari 5.1 to 6.0 */
  /* For Opera 11.1 to 12.0 */
  /* For Firefox 3.6 to 15 */
  background: -webkit-gradient(linear, left top, right bottom, from(#0062cc), to(#3395ff));
  background: linear-gradient(to bottom right, #0062cc, #3395ff);
  /* Standard syntax */ }

.bg {
  background-color: #f8f8f8 !important; }

.bg2 {
  background-color: #eceded !important; }

.bg-purple {
  background-color: #6f42c1; }

.bg-orange {
  background-color: #fd7e14; }

.bg-green {
  background-color: #28a745; }

.bg-blue {
  background-color: #007bff; }

.bg-pattern {
  background-image: url(../images/banners/bg-pattern.svg), linear-gradient(135deg, #007bff, #0062cc);
  background-size: cover, auto;
  background-repeat: no-repeat, repeat;
  background-position: 0px 0px, 50% 50%; }

.bg-img {
  overflow: hidden;
  background-color: #ddd;
  background-image: linear-gradient(135deg, rgba(51, 149, 255, 0.8), rgba(0, 98, 204, 0.9)), url("../images/banners/bg-cpu.jpg");
  background-position: 0px 0px, 50% 50%;
  background-size: auto  cover; }

.overlay-grad {
  position: relative; }
  .overlay-grad:before {
    position: absolute;
    content: "";
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .6;
    -webkit-transition: .5s;
    transition: .5s;
    background: #6c757d;
    /* For browsers that do not support gradients */
    /* For Safari 5.1 to 6.0 */
    /* For Opera 11.1 to 12.0 */
    /* For Firefox 3.6 to 15 */
    background: -webkit-gradient(linear, left top, right bottom, from(#007bff), to(#6c757d));
    background: linear-gradient(to bottom right, #007bff, #6c757d);
    /* Standard syntax */ }
  .overlay-grad:hover:before {
    opacity: .9; }

/* --------------------- titles ---------------------- */
.section-heading {
  margin-bottom: 20px;
  margin-top: 10px; }

.title-section {
  padding-right: 15px; }

.title-text {
  margin-top: 45px;
  margin-bottom: 20px; }

.title-category {
  margin: 0;
  padding: 1rem 1rem; }

.title-bg {
  padding: 7px 15px;
  color: #fff; }

.font-title {
  font-family: "Roboto", sans-serif; }

.text-lg {
  font-size: 125%; }

.word-limit {
  height: 40px;
  line-height: 20px; }

/* ==================  title element ================ */
.heading-line {
  position: relative; }
  .heading-line .title-section {
    position: relative;
    display: inline-block;
    padding-right: 15px;
    background-color: inherit;
    z-index: 2; }

.heading-line::before {
  top: 43%;
  border-top-style: solid;
  content: "";
  position: absolute;
  left: auto;
  right: 0;
  width: 100%;
  height: 0;
  border: 3px solid #E9EAEF;
  overflow: hidden; }

.b {
  font-weight: 600; }

.white {
  color: #fff; }

.black, .dark {
  color: #000; }

/* ==================  title helpers ================ */
.rtl {
  direction: rtl; }

.ltr {
  direction: ltr; }

.lh-sm {
  line-height: 1.2; }

.lh-lg {
  line-height: 1.6; }

/*! 
 * grid for 24 of 1 
 * made by bootstrap-ecommerce.com
*/
.col-1-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 4.1666666667%;
          flex: 0 0 4.1666666667%;
  max-width: 4.1666666667%; }

.col-2-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 8.3333333333%;
          flex: 0 0 8.3333333333%;
  max-width: 8.3333333333%; }

.col-3-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 12.5%;
          flex: 0 0 12.5%;
  max-width: 12.5%; }

.col-4-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 16.6666666667%;
          flex: 0 0 16.6666666667%;
  max-width: 16.6666666667%; }

.col-5-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 20.8333333333%;
          flex: 0 0 20.8333333333%;
  max-width: 20.8333333333%; }

.col-6-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 25%;
          flex: 0 0 25%;
  max-width: 25%; }

.col-7-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 29.1666666667%;
          flex: 0 0 29.1666666667%;
  max-width: 29.1666666667%; }

.col-8-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 33.3333333333%;
          flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%; }

.col-9-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 37.5%;
          flex: 0 0 37.5%;
  max-width: 37.5%; }

.col-10-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 41.6666666667%;
          flex: 0 0 41.6666666667%;
  max-width: 41.6666666667%; }

.col-11-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 45.8333333333%;
          flex: 0 0 45.8333333333%;
  max-width: 45.8333333333%; }

.col-12-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
          flex: 0 0 50%;
  max-width: 50%; }

.col-13-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 54.1666666667%;
          flex: 0 0 54.1666666667%;
  max-width: 54.1666666667%; }

.col-14-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 58.3333333333%;
          flex: 0 0 58.3333333333%;
  max-width: 58.3333333333%; }

.col-15-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 62.5%;
          flex: 0 0 62.5%;
  max-width: 62.5%; }

.col-16-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 66.6666666667%;
          flex: 0 0 66.6666666667%;
  max-width: 66.6666666667%; }

.col-17-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 70.8333333333%;
          flex: 0 0 70.8333333333%;
  max-width: 70.8333333333%; }

.col-18-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 75%;
          flex: 0 0 75%;
  max-width: 75%; }

.col-19-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 79.1666666667%;
          flex: 0 0 79.1666666667%;
  max-width: 79.1666666667%; }

.col-20-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 83.3333333333%;
          flex: 0 0 83.3333333333%;
  max-width: 83.3333333333%; }

.col-21-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 87.5%;
          flex: 0 0 87.5%;
  max-width: 87.5%; }

.col-22-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 91.6666666667%;
          flex: 0 0 91.6666666667%;
  max-width: 91.6666666667%; }

.col-23-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 95.8333333333%;
          flex: 0 0 95.8333333333%;
  max-width: 95.8333333333%; }

.col-24, .col-24-24 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
          flex: 0 0 100%;
  max-width: 100%; }

.offset-1-24 {
  margin-left: 4.1666666667%; }

.offset-2-24 {
  margin-left: 8.3333333333%; }

.offset-3-24 {
  margin-left: 12.5%; }

.offset-4-24 {
  margin-left: 16.6666666667%; }

.offset-5-24 {
  margin-left: 20.8333333333%; }

.offset-6-24 {
  margin-left: 25%; }

.offset-7-24 {
  margin-left: 29.1666666667%; }

.offset-8-24 {
  margin-left: 33.3333333333%; }

.offset-9-24 {
  margin-left: 37.5%; }

.offset-10-24 {
  margin-left: 41.6666666667%; }

.offset-11-24 {
  margin-left: 45.8333333333%; }

.offset-12-24 {
  margin-left: 50%; }

.offset-13-24 {
  margin-left: 54.1666666667%; }

.offset-14-24 {
  margin-left: 58.3333333333%; }

.offset-15-24 {
  margin-left: 62.5%; }

.offset-16-24 {
  margin-left: 66.6666666667%; }

.offset-17-24 {
  margin-left: 70.8333333333%; }

.offset-18-24 {
  margin-left: 75%; }

.offset-19-24 {
  margin-left: 79.1666666667%; }

.offset-20-24 {
  margin-left: 83.3333333333%; }

.offset-21-24 {
  margin-left: 87.5%; }

.offset-22-24 {
  margin-left: 91.6666666667%; }

.offset-23-24 {
  margin-left: 95.8333333333%; }

@media (min-width: 576px) {
  .col-sm-1-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 4.1666666667%;
            flex: 0 0 4.1666666667%;
    max-width: 4.1666666667%; }

  .col-sm-2-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 8.3333333333%;
            flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%; }

  .col-sm-3-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 12.5%;
            flex: 0 0 12.5%;
    max-width: 12.5%; }

  .col-sm-4-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 16.6666666667%;
            flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%; }

  .col-sm-5-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 20.8333333333%;
            flex: 0 0 20.8333333333%;
    max-width: 20.8333333333%; }

  .col-sm-6-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
            flex: 0 0 25%;
    max-width: 25%; }

  .col-sm-7-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 29.1666666667%;
            flex: 0 0 29.1666666667%;
    max-width: 29.1666666667%; }

  .col-sm-8-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 33.3333333333%;
            flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%; }

  .col-sm-9-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 37.5%;
            flex: 0 0 37.5%;
    max-width: 37.5%; }

  .col-sm-10-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 41.6666666667%;
            flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%; }

  .col-sm-11-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 45.8333333333%;
            flex: 0 0 45.8333333333%;
    max-width: 45.8333333333%; }

  .col-sm-12-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
            flex: 0 0 50%;
    max-width: 50%; }

  .col-sm-13-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 54.1666666667%;
            flex: 0 0 54.1666666667%;
    max-width: 54.1666666667%; }

  .col-sm-14-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 58.3333333333%;
            flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%; }

  .col-sm-15-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 62.5%;
            flex: 0 0 62.5%;
    max-width: 62.5%; }

  .col-sm-16-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 66.6666666667%;
            flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%; }

  .col-sm-17-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 70.8333333333%;
            flex: 0 0 70.8333333333%;
    max-width: 70.8333333333%; }

  .col-sm-18-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
            flex: 0 0 75%;
    max-width: 75%; }

  .col-sm-19-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 79.1666666667%;
            flex: 0 0 79.1666666667%;
    max-width: 79.1666666667%; }

  .col-sm-20-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 83.3333333333%;
            flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%; }

  .col-sm-21-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 87.5%;
            flex: 0 0 87.5%;
    max-width: 87.5%; }

  .col-sm-22-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 91.6666666667%;
            flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%; }

  .col-sm-23-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 95.8333333333%;
            flex: 0 0 95.8333333333%;
    max-width: 95.8333333333%; }

  .col-sm-24, .col-sm-24-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%; }

  .offset-sm-1-24 {
    margin-left: 4.1666666667%; }

  .offset-sm-2-24 {
    margin-left: 8.3333333333%; }

  .offset-sm-3-24 {
    margin-left: 12.5%; }

  .offset-sm-4-24 {
    margin-left: 16.6666666667%; }

  .offset-sm-5-24 {
    margin-left: 20.8333333333%; }

  .offset-sm-6-24 {
    margin-left: 25%; }

  .offset-sm-7-24 {
    margin-left: 29.1666666667%; }

  .offset-sm-8-24 {
    margin-left: 33.3333333333%; }

  .offset-sm-9-24 {
    margin-left: 37.5%; }

  .offset-sm-10-24 {
    margin-left: 41.6666666667%; }

  .offset-sm-11-24 {
    margin-left: 45.8333333333%; }

  .offset-sm-12-24 {
    margin-left: 50%; }

  .offset-sm-13-24 {
    margin-left: 54.1666666667%; }

  .offset-sm-14-24 {
    margin-left: 58.3333333333%; }

  .offset-sm-15-24 {
    margin-left: 62.5%; }

  .offset-sm-16-24 {
    margin-left: 66.6666666667%; }

  .offset-sm-17-24 {
    margin-left: 70.8333333333%; }

  .offset-sm-18-24 {
    margin-left: 75%; }

  .offset-sm-19-24 {
    margin-left: 79.1666666667%; }

  .offset-sm-20-24 {
    margin-left: 83.3333333333%; }

  .offset-sm-21-24 {
    margin-left: 87.5%; }

  .offset-sm-22-24 {
    margin-left: 91.6666666667%; }

  .offset-sm-23-24 {
    margin-left: 95.8333333333%; } }
@media (min-width: 768px) {
  .col-md-1-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 4.1666666667%;
            flex: 0 0 4.1666666667%;
    max-width: 4.1666666667%; }

  .col-md-2-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 8.3333333333%;
            flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%; }

  .col-md-3-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 12.5%;
            flex: 0 0 12.5%;
    max-width: 12.5%; }

  .col-md-4-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 16.6666666667%;
            flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%; }

  .col-md-5-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 20.8333333333%;
            flex: 0 0 20.8333333333%;
    max-width: 20.8333333333%; }

  .col-md-6-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
            flex: 0 0 25%;
    max-width: 25%; }

  .col-md-7-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 29.1666666667%;
            flex: 0 0 29.1666666667%;
    max-width: 29.1666666667%; }

  .col-md-8-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 33.3333333333%;
            flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%; }

  .col-md-9-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 37.5%;
            flex: 0 0 37.5%;
    max-width: 37.5%; }

  .col-md-10-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 41.6666666667%;
            flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%; }

  .col-md-11-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 45.8333333333%;
            flex: 0 0 45.8333333333%;
    max-width: 45.8333333333%; }

  .col-md-12-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
            flex: 0 0 50%;
    max-width: 50%; }

  .col-md-13-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 54.1666666667%;
            flex: 0 0 54.1666666667%;
    max-width: 54.1666666667%; }

  .col-md-14-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 58.3333333333%;
            flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%; }

  .col-md-15-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 62.5%;
            flex: 0 0 62.5%;
    max-width: 62.5%; }

  .col-md-16-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 66.6666666667%;
            flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%; }

  .col-md-17-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 70.8333333333%;
            flex: 0 0 70.8333333333%;
    max-width: 70.8333333333%; }

  .col-md-18-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
            flex: 0 0 75%;
    max-width: 75%; }

  .col-md-19-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 79.1666666667%;
            flex: 0 0 79.1666666667%;
    max-width: 79.1666666667%; }

  .col-md-20-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 83.3333333333%;
            flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%; }

  .col-md-21-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 87.5%;
            flex: 0 0 87.5%;
    max-width: 87.5%; }

  .col-md-22-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 91.6666666667%;
            flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%; }

  .col-md-23-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 95.8333333333%;
            flex: 0 0 95.8333333333%;
    max-width: 95.8333333333%; }

  .col-md-24, .col-md-24-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%; }

  .offset-md-1-24 {
    margin-left: 4.1666666667%; }

  .offset-md-2-24 {
    margin-left: 8.3333333333%; }

  .offset-md-3-24 {
    margin-left: 12.5%; }

  .offset-md-4-24 {
    margin-left: 16.6666666667%; }

  .offset-md-5-24 {
    margin-left: 20.8333333333%; }

  .offset-md-6-24 {
    margin-left: 25%; }

  .offset-md-7-24 {
    margin-left: 29.1666666667%; }

  .offset-md-8-24 {
    margin-left: 33.3333333333%; }

  .offset-md-9-24 {
    margin-left: 37.5%; }

  .offset-md-10-24 {
    margin-left: 41.6666666667%; }

  .offset-md-11-24 {
    margin-left: 45.8333333333%; }

  .offset-md-12-24 {
    margin-left: 50%; }

  .offset-md-13-24 {
    margin-left: 54.1666666667%; }

  .offset-md-14-24 {
    margin-left: 58.3333333333%; }

  .offset-md-15-24 {
    margin-left: 62.5%; }

  .offset-md-16-24 {
    margin-left: 66.6666666667%; }

  .offset-md-17-24 {
    margin-left: 70.8333333333%; }

  .offset-md-18-24 {
    margin-left: 75%; }

  .offset-md-19-24 {
    margin-left: 79.1666666667%; }

  .offset-md-20-24 {
    margin-left: 83.3333333333%; }

  .offset-md-21-24 {
    margin-left: 87.5%; }

  .offset-md-22-24 {
    margin-left: 91.6666666667%; }

  .offset-md-23-24 {
    margin-left: 95.8333333333%; } }
@media (min-width: 992px) {
  .col-lg-1-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 4.1666666667%;
            flex: 0 0 4.1666666667%;
    max-width: 4.1666666667%; }

  .col-lg-2-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 8.3333333333%;
            flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%; }

  .col-lg-3-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 12.5%;
            flex: 0 0 12.5%;
    max-width: 12.5%; }

  .col-lg-4-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 16.6666666667%;
            flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%; }

  .col-lg-5-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 20.8333333333%;
            flex: 0 0 20.8333333333%;
    max-width: 20.8333333333%; }

  .col-lg-6-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
            flex: 0 0 25%;
    max-width: 25%; }

  .col-lg-7-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 29.1666666667%;
            flex: 0 0 29.1666666667%;
    max-width: 29.1666666667%; }

  .col-lg-8-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 33.3333333333%;
            flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%; }

  .col-lg-9-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 37.5%;
            flex: 0 0 37.5%;
    max-width: 37.5%; }

  .col-lg-10-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 41.6666666667%;
            flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%; }

  .col-lg-11-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 45.8333333333%;
            flex: 0 0 45.8333333333%;
    max-width: 45.8333333333%; }

  .col-lg-12-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
            flex: 0 0 50%;
    max-width: 50%; }

  .col-lg-13-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 54.1666666667%;
            flex: 0 0 54.1666666667%;
    max-width: 54.1666666667%; }

  .col-lg-14-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 58.3333333333%;
            flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%; }

  .col-lg-15-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 62.5%;
            flex: 0 0 62.5%;
    max-width: 62.5%; }

  .col-lg-16-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 66.6666666667%;
            flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%; }

  .col-lg-17-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 70.8333333333%;
            flex: 0 0 70.8333333333%;
    max-width: 70.8333333333%; }

  .col-lg-18-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
            flex: 0 0 75%;
    max-width: 75%; }

  .col-lg-19-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 79.1666666667%;
            flex: 0 0 79.1666666667%;
    max-width: 79.1666666667%; }

  .col-lg-20-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 83.3333333333%;
            flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%; }

  .col-lg-21-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 87.5%;
            flex: 0 0 87.5%;
    max-width: 87.5%; }

  .col-lg-22-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 91.6666666667%;
            flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%; }

  .col-lg-23-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 95.8333333333%;
            flex: 0 0 95.8333333333%;
    max-width: 95.8333333333%; }

  .col-lg-24, .col-lg-24-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%; }

  .offset-lg-1-24 {
    margin-left: 4.1666666667%; }

  .offset-lg-2-24 {
    margin-left: 8.3333333333%; }

  .offset-lg-3-24 {
    margin-left: 12.5%; }

  .offset-lg-4-24 {
    margin-left: 16.6666666667%; }

  .offset-lg-5-24 {
    margin-left: 20.8333333333%; }

  .offset-lg-6-24 {
    margin-left: 25%; }

  .offset-lg-7-24 {
    margin-left: 29.1666666667%; }

  .offset-lg-8-24 {
    margin-left: 33.3333333333%; }

  .offset-lg-9-24 {
    margin-left: 37.5%; }

  .offset-lg-10-24 {
    margin-left: 41.6666666667%; }

  .offset-lg-11-24 {
    margin-left: 45.8333333333%; }

  .offset-lg-12-24 {
    margin-left: 50%; }

  .offset-lg-13-24 {
    margin-left: 54.1666666667%; }

  .offset-lg-14-24 {
    margin-left: 58.3333333333%; }

  .offset-lg-15-24 {
    margin-left: 62.5%; }

  .offset-lg-16-24 {
    margin-left: 66.6666666667%; }

  .offset-lg-17-24 {
    margin-left: 70.8333333333%; }

  .offset-lg-18-24 {
    margin-left: 75%; }

  .offset-lg-19-24 {
    margin-left: 79.1666666667%; }

  .offset-lg-20-24 {
    margin-left: 83.3333333333%; }

  .offset-lg-21-24 {
    margin-left: 87.5%; }

  .offset-lg-22-24 {
    margin-left: 91.6666666667%; }

  .offset-lg-23-24 {
    margin-left: 95.8333333333%; } }
@media (min-width: 1200px) {
  .col-xl-1-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 4.1666666667%;
            flex: 0 0 4.1666666667%;
    max-width: 4.1666666667%; }

  .col-xl-2-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 8.3333333333%;
            flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%; }

  .col-xl-3-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 12.5%;
            flex: 0 0 12.5%;
    max-width: 12.5%; }

  .col-xl-4-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 16.6666666667%;
            flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%; }

  .col-xl-5-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 20.8333333333%;
            flex: 0 0 20.8333333333%;
    max-width: 20.8333333333%; }

  .col-xl-6-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
            flex: 0 0 25%;
    max-width: 25%; }

  .col-xl-7-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 29.1666666667%;
            flex: 0 0 29.1666666667%;
    max-width: 29.1666666667%; }

  .col-xl-8-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 33.3333333333%;
            flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%; }

  .col-xl-9-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 37.5%;
            flex: 0 0 37.5%;
    max-width: 37.5%; }

  .col-xl-10-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 41.6666666667%;
            flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%; }

  .col-xl-11-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 45.8333333333%;
            flex: 0 0 45.8333333333%;
    max-width: 45.8333333333%; }

  .col-xl-12-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
            flex: 0 0 50%;
    max-width: 50%; }

  .col-xl-13-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 54.1666666667%;
            flex: 0 0 54.1666666667%;
    max-width: 54.1666666667%; }

  .col-xl-14-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 58.3333333333%;
            flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%; }

  .col-xl-15-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 62.5%;
            flex: 0 0 62.5%;
    max-width: 62.5%; }

  .col-xl-16-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 66.6666666667%;
            flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%; }

  .col-xl-17-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 70.8333333333%;
            flex: 0 0 70.8333333333%;
    max-width: 70.8333333333%; }

  .col-xl-18-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
            flex: 0 0 75%;
    max-width: 75%; }

  .col-xl-19-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 79.1666666667%;
            flex: 0 0 79.1666666667%;
    max-width: 79.1666666667%; }

  .col-xl-20-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 83.3333333333%;
            flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%; }

  .col-xl-21-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 87.5%;
            flex: 0 0 87.5%;
    max-width: 87.5%; }

  .col-xl-22-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 91.6666666667%;
            flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%; }

  .col-xl-23-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 95.8333333333%;
            flex: 0 0 95.8333333333%;
    max-width: 95.8333333333%; }

  .col-xl-24, .col-xl-24-24 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%; }

  .offset-xl-1-24 {
    margin-left: 4.1666666667%; }

  .offset-xl-2-24 {
    margin-left: 8.3333333333%; }

  .offset-xl-3-24 {
    margin-left: 12.5%; }

  .offset-xl-4-24 {
    margin-left: 16.6666666667%; }

  .offset-xl-5-24 {
    margin-left: 20.8333333333%; }

  .offset-xl-6-24 {
    margin-left: 25%; }

  .offset-xl-7-24 {
    margin-left: 29.1666666667%; }

  .offset-xl-8-24 {
    margin-left: 33.3333333333%; }

  .offset-xl-9-24 {
    margin-left: 37.5%; }

  .offset-xl-10-24 {
    margin-left: 41.6666666667%; }

  .offset-xl-11-24 {
    margin-left: 45.8333333333%; }

  .offset-xl-12-24 {
    margin-left: 50%; }

  .offset-xl-13-24 {
    margin-left: 54.1666666667%; }

  .offset-xl-14-24 {
    margin-left: 58.3333333333%; }

  .offset-xl-15-24 {
    margin-left: 62.5%; }

  .offset-xl-16-24 {
    margin-left: 66.6666666667%; }

  .offset-xl-17-24 {
    margin-left: 70.8333333333%; }

  .offset-xl-18-24 {
    margin-left: 75%; }

  .offset-xl-19-24 {
    margin-left: 79.1666666667%; }

  .offset-xl-20-24 {
    margin-left: 83.3333333333%; }

  .offset-xl-21-24 {
    margin-left: 87.5%; }

  .offset-xl-22-24 {
    margin-left: 91.6666666667%; }

  .offset-xl-23-24 {
    margin-left: 95.8333333333%; } }
/* by default 24 grid cols full width */
[class^="col-"][class*="-24"] {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px; }

/* nogutter for 24 grid cols */
.no-gutters > [class*="col-"] {
  padding-right: 0 !important;
  padding-left: 0 !important; }

/* ================== SECTIONS =================== */
.navbar-top {
  padding: 0; }

.navbar-landing {
  -webkit-transition: .5s;
  transition: .5s;
  padding-top: 15px;
  padding-bottom: 15px;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%; }

.navbar-landing.fixed-top {
  -webkit-transition: .5s;
  transition: .5s;
  padding-top: 7px;
  padding-bottom: 7px; }

/* ================== header main ==================  */
.header-main {
  padding-top: 1rem;
  padding-bottom: 1rem; }

.brand-wrap .logo, .navbar-brand .logo {
  margin-right: 7px;
  max-height: 42px;
  display: inline-block; }
.brand-wrap .logo-text, .navbar-brand .logo-text {
  margin: 0;
  display: inline-block;
  font-size: 22px;
  vertical-align: middle; }

.header-main {
  position: relative; }

.widget-header {
  margin-left: 7px;
  margin-right: 7px;
  display: inline-block;
  position: relative; }
  .widget-header form {
    min-width: 280px; }
  .widget-header .title {
    display: block; }
  .widget-header .notify {
    position: absolute;
    top: -3px;
    right: -10px; }

/* desktop only */
/* desktop only .end */
/* ================ SECTION-FOOTER ==================  */
.section-footer ul a {
  color: inherit; }

.footer-top .title {
  font-weight: 600; }

.footer-bottom {
  padding: 15px 0; }

/* ================== PAGES =================== */
/* ================ PAGES HEADER ================== */
.section-pagetop {
  padding: 45px 0;
  background-repeat: no-repeat;
  background-size: cover; }
  .section-pagetop .title-page {
    color: #fff;
    opacity: .6; }

/* ================== PAGE DETAILS ==================  */
.gallery-wrap .img-big-wrap {
  margin-bottom: 10px;
  overflow: hidden;
  background-color: #fff; }
  .gallery-wrap .img-big-wrap a {
    text-align: center;
    display: block; }
  .gallery-wrap .img-big-wrap img {
    height: 450px;
    width: auto;
    display: inline-block;
    cursor: -webkit-zoom-in;
    cursor: zoom-in; }
.gallery-wrap .img-small-wrap {
  text-align: center; }
  .gallery-wrap .img-small-wrap .item-gallery {
    width: 60px;
    height: 60px;
    border: 1px solid #ddd;
    margin: 7px 2px;
    display: inline-block;
    overflow: hidden; }
  .gallery-wrap .img-small-wrap img {
    max-width: 100%;
    max-height: 100%;
    -o-object-fit: cover;
       object-fit: cover;
    border-radius: 4px;
    cursor: -webkit-zoom-in;
    cursor: zoom-in; }
    .gallery-wrap .img-small-wrap img:hover {
      -webkit-filter: brightness(1.1);
              filter: brightness(1.1);
      cursor: -webkit-zoom-in;
      cursor: zoom-in; }

/* ================== COMPONENTS =================== */
.owl-prev, .owl-next {
  z-index: 9;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  position: absolute; }

.owl-prev {
  left: -30px;
  content: "<"; }

.owl-next {
  right: -30px;
  content: ">"; }

/* slider main */
.slider-main .owl-prev, .slider-main .owl-next {
  padding: 18px 7px;
  color: #FFF;
  background-color: rgba(0, 0, 0, 0.4); }
.slider-main .owl-nav [class*='owl-']:hover {
  background: #869791;
  color: #FFF; }
.slider-main .owl-prev {
  left: 0; }
.slider-main .owl-next {
  right: 0; }
.slider-main .item-slide {
  height: 325px; }
  .slider-main .item-slide img {
    min-width: 100%;
    min-height: 100%;
    -o-object-fit: cover;
       object-fit: cover; }

/* slide items  */
.slide-items .owl-prev, .slide-items .owl-next {
  top: 42%; }

.btn-facebook {
  background-color: #405D9D;
  color: #fff; }
  .btn-facebook:hover {
    color: #fff; }

.btn-instagram {
  background-color: #E52D27;
  color: #fff; }
  .btn-instagram:hover {
    color: #fff; }

.btn-youtube {
  background-color: #C8046C;
  color: #fff; }
  .btn-youtube:hover {
    color: #fff; }

.btn-twitter {
  background-color: #42AEEC;
  color: #fff; }
  .btn-twitter:hover {
    color: #fff; }

.itembox .icon-wrap {
  margin-bottom: 15px;
  margin-top: 7px; }
.itembox img {
  max-width: 100%; }

.itemside {
  position: relative;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  width: 100%; }
  .itemside .text-wrap {
    padding-left: 15px;
    padding-right: 7px; }
  .itemside .img-wrap {
    position: relative;
    border-radius: 0.25rem 0 0 0.25rem; }
  .itemside img {
    -o-object-fit: contain;
       object-fit: contain; }
  .itemside p, .itemside .title {
    margin-bottom: 0.5rem; }
  .itemside .img-bg {
    -o-object-fit: contain;
       object-fit: contain;
    position: absolute;
    right: 0;
    bottom: 0;
    max-height: 100px;
    bottom: 0;
    z-index: 0; }
  .itemside .card-body {
    position: relative;
    z-index: 3; }

.items-bordered-wrap .itemside:not(:last-child) {
  border-bottom: 1px solid #dee2e6;
  padding-bottom: 10px;
  margin-bottom: 10px; }

.itemlist {
  padding: 20px;
  border-bottom: 1px solid #eee; }

.list-inline {
  margin-bottom: 0; }

.list-inline-item {
  vertical-align: middle; }

/* --------- description list --------*/
[class*="dlist-"] {
  margin-bottom: 5px; }
  [class*="dlist-"] dd {
    margin-bottom: 0; }

.dlist-inline dt, .dlist-inline dd {
  display: inline-block; }

.dlist-align dt {
  width: 90px;
  float: left;
  word-wrap: break-word; }
.dlist-align dd {
  margin-left: 120px;
  vertical-align: baseline; }

/* -------------------- list.row--------------------- */
ul.row, ul.row-sm {
  list-style: none;
  padding: 0;
  margin-bottom: 0; }

/* ================= lists ================= */
[class*="list-"] li:after {
  visibility: hidden;
  display: block;
  content: "";
  overflow: hidden;
  height: 0;
  clear: both; }

.list-lg li {
  margin-bottom: 10px; }

.list-icon {
  list-style: none;
  padding: 0; }
  .list-icon li {
    margin-bottom: 10px; }
  .list-icon img {
    width: 30px;
    vertical-align: middle;
    margin-right: 15px; }
  .list-icon .icon {
    width: 22px;
    margin-right: 15px;
    vertical-align: middle;
    font-size: 20px;
    text-align: center; }
  .list-icon span {
    vertical-align: middle; }

.list-bullet {
  list-style: none;
  padding: 0; }

.list-bullet li {
  margin-bottom: 7px;
  position: relative;
  padding-left: 15px; }

.list-bullet li::before {
  content: " ";
  position: absolute;
  top: 45%;
  left: 0;
  width: 7px;
  height: 7px;
  margin: 0px 10px 0px 0px;
  background: #6c757d;
  border-radius: 7px; }

.list-check > li {
  list-style: none;
  position: relative; }
.list-check > li::before {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  color: #6c757d;
  position: absolute;
  top: 0px;
  left: 0;
  content: "\f00c";
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  display: inline-block; }

.list-icon {
  list-style: none;
  padding: 0; }
  .list-icon li {
    position: relative;
    padding-left: 30px; }
  .list-icon .icon {
    position: absolute;
    top: 3px;
    left: 0;
    font-size: 13px; }

.card-product {
  margin-bottom: 1rem;
  /* btn-overlay-bottom */ }
  .card-product:after {
    content: "";
    display: table;
    clear: both;
    visibility: hidden; }
  .card-product .img-wrap {
    border-radius: 0.2rem 0.2rem 0 0;
    overflow: hidden;
    position: relative;
    height: 55px;
    text-align: center; }
    .card-product .img-wrap img {
      max-height: 100%;
      max-width: 100%;
      width: auto;
      display: inline-block;
      -o-object-fit: cover;
         object-fit: cover; }
  .card-product .info-wrap {
    overflow: hidden;
    padding: 15px;
    border-top: 1px solid #eee; }
  .card-product .action-wrap {
    padding-top: 4px;
    margin-top: 4px; }
  .card-product .bottom-wrap {
    padding: 15px;
    border-top: 1px solid #eee; }
  .card-product .title {
    margin-top: 0; }
  .card-product .btn-overlay {
    -webkit-transition: .5s;
    transition: .5s;
    opacity: 0;
    left: 0;
    bottom: 0;
    color: #fff;
    width: 100%;
    padding: 5px 0;
    font-size: 12px;
    text-align: center;
    position: absolute;
    text-transform: uppercase;
    background: rgba(0, 0, 0, 0.5); }
  .card-product:hover .btn-overlay {
    opacity: 1; }
  .card-product:hover {
    -webkit-box-shadow: 0 4px 15px rgba(153, 153, 153, 0.3);
            box-shadow: 0 4px 15px rgba(153, 153, 153, 0.3);
    -webkit-transition: .5s;
    transition: .5s; }

.card-sm .img-wrap {
  height: 55px; }

.card-banner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  background-size: cover;
  border-radius: 0.25rem; }
  .card-banner .card-body {
    background-size: cover;
    position: relative;
    z-index: 10; }
  .card-banner .img-bg {
    position: absolute;
    right: 0;
    bottom: 0;
    mix-blend-mode: multiply;
    max-width: 100%; }
  .card-banner .overlay {
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 10;
    padding: 1.25rem;
    color: #fff; }
  .card-banner .overlay.bottom {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%; }
  .card-banner .overlay.top {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%; }
  .card-banner .overlay-cover {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    width: 100%; }
  .card-banner .overlay.left {
    top: 0;
    left: 0;
    bottom: 0;
    position: absolute; }
  .card-banner .text-bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    padding: 7px 20px;
    padding-top: 30px;
    border-radius: 0 0 0.25rem 0.25rem;
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.8)));
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
    color: #fff; }

.banner-size-lg {
  height: 350px; }

.card .img-wrap {
  overflow: hidden; }

.icontext {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; }
  .icontext .icon-wrap {
    position: relative; }
  .icontext .text-wrap {
    line-height: 1.2;
    padding-left: 10px; }
  .icontext small, .icontext .title {
    display: block; }

.price-new, .price {
  margin-right: 5px; }

.price-old {
  color: #999; }

.notify {
  position: absolute;
  top: -4px;
  right: -10px;
  display: inline-block;
  padding: .25em .6em;
  font-size: 75%;
  line-height: 1;
  text-align: center;
  border-radius: 3rem;
  color: #fff;
  background-color: #dc3545; }

.icon-action {
  margin-top: 5px;
  float: right;
  font-size: 80%; }

.list-group .list-group-item {
  padding-bottom: .5rem; }
.list-group .title {
  margin-top: 5px;
  margin-bottom: 12px; }

.card-header .title {
  margin-bottom: 0;
  line-height: 1.5; }

.card-group-item {
  border-bottom: 1px solid #dee2e6; }
  .card-group-item .card-header {
    border-bottom: 0;
    background-color: #f9f9f9; }
  .card-group-item:last-child {
    border-bottom: 0; }

/* ====================== shopping-cart ==================== */
.shopping-cart-wrap img {
  max-width: 100px; }
.shopping-cart-wrap thead th {
  border-top: 0;
  border-bottom: 0; }
.shopping-cart-wrap .price {
  color: #007bff;
  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
  display: block; }

/* ====================== block ==================== */
.box {
  padding: 1rem 1.2rem;
  display: block;
  background: #fff;
  border-radius: 0.2rem;
  -webkit-box-shadow: 0 1px 3px rgba(51, 51, 51, 0.1);
          box-shadow: 0 1px 3px rgba(51, 51, 51, 0.1); }

/* --------- media element --------*/
.media .img-wrap {
  margin-right: 1rem; }

/* =================  ELEMENTS FOR PRODUCT =================== */
.badge-new {
  top: 7px;
  left: 7px;
  position: absolute;
  display: block;
  z-index: 10;
  padding: 2px 7px;
  font-size: 12px;
  background-color: #ef5f5f;
  color: #fff;
  border-radius: 4px; }

.badge-offer {
  display: block;
  position: absolute;
  top: 0px;
  right: 15px;
  z-index: 2; }
  .badge-offer b {
    background: #ef5f5f;
    padding: 4px;
    font-family: 'Bebas';
    font-weight: normal;
    text-align: center;
    color: #fff;
    font-size: 16px;
    display: inline-block;
    height: 36px;
    width: 50px;
    position: relative; }
  .badge-offer b:after {
    border-top: 7px solid #ef5f5f;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    content: "";
    height: 0;
    left: 0;
    position: absolute;
    top: 36px;
    width: 0; }

/* ================= RATINGS ============== */
.label-rating {
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle; }

.stars-simple {
  margin-bottom: 7px; }
  .stars-simple i {
    color: orange; }
  .stars-simple small {
    color: #999;
    margin-left: 5px; }

/* rating-list */
.rating-stars {
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  line-height: 1;
  white-space: nowrap;
  clear: both; }
  .rating-stars i {
    font-size: 14px;
    color: #ccc;
    display: inline; }
  .rating-stars li {
    display: block;
    text-overflow: clip;
    white-space: nowrap;
    z-index: 1; }
  .rating-stars li.stars-active {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden; }
    .rating-stars li.stars-active i {
      color: orange; }

.divider-text {
  position: relative;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px; }
  .divider-text:after {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 1px solid #ddd;
    top: 55%;
    left: 0;
    z-index: 1; }
  .divider-text span {
    background-color: #fff;
    padding: 7px;
    font-size: 12px;
    position: relative;
    z-index: 2; }

.menu-category {
  margin: 0;
  padding: 0; }
  .menu-category li {
    position: relative;
    display: block;
    border-bottom: 1px solid #dee2e6; }
  .menu-category > li > a {
    display: block;
    padding: 10px 15px; }
  .menu-category .submenu {
    display: none;
    margin: 0;
    padding: 0;
    -webkit-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
            box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 20;
    position: absolute;
    left: 100%;
    top: 0;
    width: 250px;
    background: #fff; }
    .menu-category .submenu li {
      list-style: none; }
    .menu-category .submenu li a {
      padding: 7px 15px;
      display: block; }
  .menu-category li:hover {
    background: #f8f8f8;
    -webkit-transition: all 0.3s;
    transition: all 0.3s; }
  .menu-category li:hover .submenu {
    display: block;
    margin-left: 0px; }

/*# sourceMappingURL=ui.css.map */


@media (max-width: 768px) {
  #cart {height: 245px !important;}
 }