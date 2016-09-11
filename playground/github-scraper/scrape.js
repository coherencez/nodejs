'use strict'
const { load } = require('cheerio')

module.exports = (body) => {
	const $ = load(body),	gridItem = $('rect')
	return Array.from(gridItem, x => x.attribs)
}