jQuery Character Count Plugin
=============================

A [jQuery](http://jquery.com/) plugin for counting the number of characters or words in a given textarea.

The `css` directory stores [LESS powered](http://lesscss.org/) CSS

* Author:    Kevin Leary (<info@kevinleary.net>)
* Date:      October, 2012
* Last mod.: October, 2012
* Version:   0.1
* Website:   <http://www.kevinleary.net/>
* GitHub:    <https://github.com/Kevinlearynet/WordPress-Curated-Content>

## Basic Usage

At the most basic level, the character count script can be used right out of the box:

`$('textarea.wordcount-field').characterCount();`

This will automatically add a `span` element after the provided `textarea` field.

## Advanced Usage

A series of settings have been included for advanced scenarios and customizations:

	$('textarea.wordcount-field').characterCount({
		'countType'		: 'characters', 		// Other option is "words"
		'countClass'	: 'wordcount-total',	// Classname used for the counter span
		'limit' 		: 150
	});

## License

This free software is copyleft licensed under the same terms as WordPress, or, at your option, under version 2 of the [GPL license](http://wordpress.org/about/gpl/).