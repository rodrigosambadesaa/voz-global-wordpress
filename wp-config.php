<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'test_wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'lrhqO.j[l^F}9kBZUVf(.hvWeQVB_kb@T8,G~m1AM`Ui=j,(}brk1:c{B^Y qe!E' );
define( 'SECURE_AUTH_KEY',  '[o-(tf4Qtj0 t^I@_+FQrL[Spk%g(xZP>`N?u&&BiuLi8ufsB^{`kH,yz.;HLO##' );
define( 'LOGGED_IN_KEY',    'A2I`coh7.[ <Ok=SElelF6[!y`*)?N?yvk)y~C?8_3ie#GVsCh&DCidr^2IHo+<Y' );
define( 'NONCE_KEY',        '@gE,bBr+*0V`wcj);K.qmrSG[0uCWJq)EOULn?P&G+|UxG6sOWcb4.dV!te/mwn{' );
define( 'AUTH_SALT',        'r@C -}VWEk_p<AD.%,Cd>hyJgWD#XQOf-cyZY~5KyV]aT=,p&cZ4kM2=n%83u=~^' );
define( 'SECURE_AUTH_SALT', 'nRJe-cEG/)f2q/KWZ~dI#.lAAJU(o=W#T6!P~/b2L-7ky*PN^b<[MGUH*k:sW^dy' );
define( 'LOGGED_IN_SALT',   '%0[nMh!dt,^kKObR;w ksrloUGp!4#~L9VT6K#L{TBHb)29Yt-ccbb&ilxE!5~Tn' );
define( 'NONCE_SALT',       '0krx7^a<ET(sa%]`zhm;f*9?}sFjsm2)aO2f/qbP=iU<)l!.;/KupS{Rh> P.Faf' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
