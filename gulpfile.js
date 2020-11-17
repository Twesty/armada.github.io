var syntax         = 'scss', // Syntax: sass or scss;
		gulpVersion    = '4'; // Gulp version: 3 or 4
		gmWatch        = false; // ON/OFF GraphicsMagick watching "img/_src" folder (true/false). Linux install gm: sudo apt update; sudo apt install graphicsmagick

var gulp          = require('gulp')
		sass          = require('gulp-sass'),
		browserSync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require('gulp-notify'),
		rsync         = require('gulp-rsync'),
		imageResize   = require('gulp-image-resize'),
		imagemin      = require('gulp-imagemin'),
		minify        = require('gulp-minify'),
		del           = require('del');

// Local Server
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// open: false,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
	})
});

// Sass|Scss Styles
gulp.task('styles', function() {
	return gulp.src('app/'+syntax+'/**/*.'+syntax+'')
	.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream())
});

// JS
gulp.task('main-scripts', function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js', // Jquery
		//'app/libs/jquery-ui/jquery-ui.min.js', // Jquery UI
		//'app/libs/jquery.mask.min.js', // Jquery mask
		//'app/libs/bootstrap/js/bootstrap.min.js', // Bootstrap
		//'app/libs/bootstrap/js/bootstrap.bundle.min.js', // Bootstrap Bundle
		//'app/libs/mdbootstrap/js/mdb.min.js', // MDB
		//'app/libs/mdbootstrap/js/modules/file-input.min.js', // MDB
		'app/libs/scrollbar/jquery.mCustomScrollbar.js', // ScrolL Bar
		//'app/libs/dateRangePicker/moment.min.js', // Date range picker
		//'app/libs/dateRangePicker/daterangepicker.min.js', // Date range picker
		//'app/libs/easy-zoom/jquery.zoom.min.js', // Easy zoom
		//'app/libs/croppie/croppie.min.js', // Croppie
		'app/js/src/parts/header.js', // Header
		'app/js/src/parts/footer.js', // Footer
		'app/js/src/parts/dropdown.js', // Dropdown
		'app/js/src/parts/custom-scrollbar.js', // Dropdown
		'app/js/common.js', // Always at the end
		])
	.pipe(concat('scripts.js'))
	.pipe(minify()) // Mifify js (opt.)
	.pipe(gulp.dest('app/js/'))
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('scripts-parts', function() {
	return gulp.src('app/js/src/parts/**/*.js')
		.pipe(minify())
		.pipe(gulp.dest('app/js/dest/parts'))
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('scripts-page-home', function() {
	return gulp.src([
		'app/libs/slick/slick.min.js', // Slick
		'app/libs/popup/YouTubePopUp.jquery.js', // Popup
		'app/libs/popper.min.js', // Popper
		'app/js/src/parts/product-card.js', // Product-card
		'app/libs/easy-zoom/jquery.zoom.min.js', // Easy zoom
		'app/js/src/parts/banner.js', // Banner
		'app/js/src/parts/slideshow.js', // Slideshow
		'app/js/src/parts/together.js', // Together
		'app/js/src/page-home/*.js', // Home
	])
	.pipe(concat('home.js'))
	.pipe(minify())
	.pipe(gulp.dest('app/js/dest/page-home'))
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('scripts-page-catalog', function() {
	return gulp.src([
		'app/libs/slick/slick.min.js', // Slick
		'app/js/src/page-catalog/*.js', // Home
		'app/js/src/parts/product-card.js', // Product-card
		'app/libs/easy-zoom/jquery.zoom.min.js', // Easy zoom
		'app/js/src/parts/banner.js', // Banner
		'app/js/src/parts/filters.js', // Filters
		'app/js/src/parts/slideshow.js', // Slideshow
	])
	.pipe(concat('catalog.js'))
	.pipe(minify())
	.pipe(gulp.dest('app/js/dest/page-catalog'))
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('scripts-page-login', function() {
	return gulp.src([
		'app/libs/jquery.mask.min.js', // Jquery mask
		'app/libs/bootstrap/js/bootstrap.min.js', // Bootstrap
		'app/libs/mdbootstrap/js/mdb.min.js', // MDB
		'app/js/src/page-login/*.js', // Home
	])
	.pipe(concat('login.js'))
	.pipe(minify())
	.pipe(gulp.dest('app/js/dest/page-login'))
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('scripts-page-order', function() {
	return gulp.src([
		'app/libs/jquery.mask.min.js', // Jquery mask
		'app/libs/bootstrap/js/bootstrap.min.js', // Bootstrap
		'app/libs/mdbootstrap/js/mdb.min.js', // MDB
		'app/js/src/page-order/*.js', // Home
	])
		.pipe(concat('order.js'))
		.pipe(minify())
		.pipe(gulp.dest('app/js/dest/page-order'))
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('scripts-page-product', function() {
	return gulp.src([
		'app/libs/popup/YouTubePopUp.jquery.js', // Popup
		'app/libs/slick/slick.min.js', // Slick
		'app/js/src/parts/slideshow.js', // Slideshow
		'app/js/src/parts/product-card.js', // Product-card
		'app/libs/easy-zoom/jquery.zoom.min.js', // Easy zoom
		'app/js/src/parts/faq.js', // Faq
		'app/js/src/parts/together.js', // Together
		'app/js/src/page-product/*.js', // Home
	])
		.pipe(concat('product.js'))
		.pipe(minify())
		.pipe(gulp.dest('app/js/dest/page-product'))
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('scripts-page-shops', function() {
	return gulp.src([
		'app/js/src/parts/filters.js', // Filters
		'app/js/src/page-shops/*.js', // Home
	])
		.pipe(concat('shops.js'))
		.pipe(minify())
		.pipe(gulp.dest('app/js/dest/page-shops'))
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('scripts-page-user-area', function() {
	return gulp.src([
		'app/libs/bootstrap/js/bootstrap.min.js', // Bootstrap
		'app/libs/mdbootstrap/js/mdb.min.js', // MDB
		'app/js/src/page-user-area/*.js', // Home
	])
		.pipe(concat('user-area.js'))
		.pipe(minify())
		.pipe(gulp.dest('app/js/dest/page-user-area'))
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('scripts-page-vendor-area', function() {
	return gulp.src([
		'app/libs/bootstrap/js/bootstrap.min.js', // Bootstrap
		'app/libs/mdbootstrap/js/mdb.min.js', // MDB
		'app/libs/dateRangePicker/moment.min.js', // Date range picker
		'app/libs/dateRangePicker/daterangepicker.min.js', // Date range picker
		'app/libs/croppie/croppie.min.js', // Croppie
		'app/js/src/page-vendor-area/*.js', // Home
	])
		.pipe(concat('vendor-area.js'))
		.pipe(minify())
		.pipe(gulp.dest('app/js/dest/page-vendor-area'))
		.pipe(browserSync.reload({ stream: true }))
});

// HTML Live Reload
gulp.task('code', function() {
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function() {
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], gulp.parallel('main-scripts'));

	// Pages
	gulp.watch(['app/js/src/page-home/*.js'], gulp.parallel('scripts-page-home'));
	gulp.watch(['app/js/src/page-catalog/*.js'], gulp.parallel('scripts-page-catalog'));
	gulp.watch(['app/js/src/page-login/*.js'], gulp.parallel('scripts-page-login'));
	gulp.watch(['app/js/src/page-order/*.js'], gulp.parallel('scripts-page-order'));
	gulp.watch(['app/js/src/page-product/*.js'], gulp.parallel('scripts-page-product'));
	gulp.watch(['app/js/src/page-shops/*.js'], gulp.parallel('scripts-page-shops'));
	gulp.watch(['app/js/src/page-user-area/*.js'], gulp.parallel('scripts-page-user-area'));
	gulp.watch(['app/js/src/page-vendor-area/*.js'], gulp.parallel('scripts-page-vendor-area'));

	// Parts
	gulp.watch('app/js/src/parts/**/*.js', gulp.parallel('scripts-parts'));

	gulp.watch('app/'+syntax+'/**/*.'+syntax+'', gulp.parallel('styles'));
	gulp.watch('app/*.html', gulp.parallel('code'));
});

gmWatch ? gulp.task('default', gulp.parallel(
			// 'styles',
			// 'main-scripts',
			// 'scripts-parts',
			// 'scripts-page-home',
			// 'scripts-page-catalog',
			// 'scripts-page-login',
			// 'scripts-page-order',
			// 'scripts-page-product',
			// 'scripts-page-shops',
			// 'scripts-page-user-area',
			// 'scripts-page-vendor-area',
			'browser-sync',
			'watch'
		)) : gulp.task('default', gulp.parallel(
			// 'styles',
			// 'main-scripts',
			// 'scripts-parts',
			// 'scripts-page-home',
			// 'scripts-page-catalog',
			// 'scripts-page-login',
			// 'scripts-page-order',
			// 'scripts-page-product',
			// 'scripts-page-shops',
			// 'scripts-page-user-area',
			// 'scripts-page-vendor-area',
			'browser-sync',
			'watch'
		));
