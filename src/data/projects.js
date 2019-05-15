// add projects via an object...
// {
// 	id: 9999,
// 	name: '',
// 	icons: [],
// 	gem: '',
// 	gemAlt: 'visit on RubyGems.',
// 	npm: '',
// 	npmAlt: 'view the package on NPM.',
// 	repo: '',
// 	repoAlt: 'view the repo on GitHub.',
// 	site: '',
// 	siteAlt: 'view the app on the web.,
// 	intro: '',
// 	paras: ['', '', '']
// }

export default [
	{
		id: 10,
		name: 's33d',
		icons: ['js.png', 'webpack.png', 'react.png'],
		repo: 'https://github.com/s33dco/s33dreact',
		repoAlt: 'view the repo on GitHub',
		intro: 'A single page app online portfolio and contact page.',
		paras: [
			'A single page app online portfolio and contact page for s33d built in React and Wepback.',
			'Built to replace the Jekyll generated static site.'
		]
	},
	{
		id: 9,
		name: 'SME',
		icons: ['js.png', 'node.png', 'express.png', 'mongo.png'],
		repo: 'https://github.com/s33dco/sme',
		repoAlt: 'view the repo on GitHub',
		intro: 'SME website with invoice generating and expense tracking back end.',
		paras: [
			'Built to take the hassle out of being self-employed SME is a company website with contact page, coupled with a secure back end to handle invoicing and HMRC tax returns.',
			'',
			''
		]
	},
	{
		id: 8,
		name: 'Darkskycli',
		icons: ['js.png', 'node.png'],
		npm: 'https://www.npmjs.com/package/darkskycli',
		npmAlt: 'view the package on NPM',
		repo: 'https://github.com/s33dco/darkskycli',
		repoAlt: 'view the repo on GitHub',
		intro: 'Weather summary in your terminal for anywhere, anytime in any language.',
		paras: [
			"You know how it is, you're making arrangements, you need to know what the weather outlook will be. This NodeJS package is here to help, querry the place and date from the terminal and you quickly have the answer.",
			"Darkskycli uses the Dark Sky API for the weather forecasts and Google API for geocoding. You will need API keys for both to use this package - don't worry they are free (with in reason). Through in the super friendly Yargs to handle the option parsing and Dotenv to hold said API keys and you're good to go.",
			'You can grab the package on npm.'
		]
	},
	{
		id: 7,
		name: 'BBCtop10',
		icons: ['js.png', 'node.png'],
		npm: 'https://www.npmjs.com/package/bbctopten',
		npmAlt: 'view the package on NPM',
		repo: 'https://github.com/s33dco/bbctopten',
		repoAlt: 'view the repo on GitHub',
		intro: "Scraping the BBC's ten most read stories to your terminal window.",
		paras: [
			'Making use of the promised based HTTP client Axios and the browser emulator JSDOM BBCtopten heads over to the the BBC News website, identifies the ten most read stories, scrapes hte pages and delivers them to your terminal window.',
			'There are no bells or whistles, simply the stories delivered to your screen. A great way to check the news, work best piped to less. The package is free to use and available on npm.'
		]
	},
	{
		id: 6,
		name: 'Auction',
		icons: ['ruby.png', 'rails.png'],
		repo: 'https://github.com/s33dco/auction',
		repoAlt: 'view the repo on GitHub',
		intro: 'An app to make, manage and administer private auctions for export sales.',
		paras: [
			"An invitation only auction site developed so sales can be set up quickly and easily from a smart phone. Used to manage export auctions on a 'best bid first' basis the app is not an Ebay derivative, more of a private sales network.",
			'The App supports multiple auciton houses and sale types which can be started at the click of a button.',
			'Whilst the sale is live bid data can be viewed by the Auctioneer on the lots.',
			'Once the sale is closed commision are calculated and invoices/credit notes are emailed to the respective buyers and sellers.'
		]
	},
	{
		id: 5,
		name: 'DHP',
		icons: ['ruby.png', 'rails.png'],
		intro: 'App upgrade and addition of mobile friendly responsive design.',
		paras: [
			"Updating the Greek based English bookseller's online store from Rails 3.1 to Rails 5.2.",
			'Keeping the look and feel the same but updating the SCSS/CSS to a responsive mobile friendly design.'
		]
	},
	{
		id: 4,
		name: 'Coop',
		icons: ['ruby.png', 'rails.png'],
		repo: 'https://github.com/s33dco/housing-coop',
		repoAlt: 'view the repo on GitHub',
		intro: 'An app to administer a self-managing housing Co-op.',
		paras: [
			'Built from scratch this Rails app was designed to take the stress out of managing a Housing Coop and in particular to handle the rent reporting and maintenance histories of the properties.',
			'',
			''
		]
	},
	{
		id: 3,
		name: 'Banco',
		icons: ['ruby.png'],
		gem: 'https://rubygems.org/gems/banco',
		gemAlt: 'visit on RubyGems',
		npm: '',
		npmAlt: 'see package on NPM',
		repo: 'https://github.com/s33dco/banco',
		repoAlt: 'view the repo on GitHub',
		site: '',
		siteAlt: '',
		intro: 'A statement profiler and analyizer, import CSV files, export a understanding.',
		paras: [
			"Banco was written to summarize and profile csv files downloaded from online banks, we've all wondered where the money goes and this gem provides a simple solution to the question.",
			"The app compares the description/name of the transactions, accumulating the totals for the same string names, you're welcome to increase the string length it matches should you need but though testing it seems spot on.",
			'Once your csv file is read in understanding is exported via a number of reports. You can instantly see the bottom line, review the summarized money in / money out, review the transactions indiviually and write all the details to a file. Everything is ordered in descending value with the details presented on your terminal window. Written in Ruby with no dependencies the Banco gem runs from your command line and is available.'
		]
	},
	{
		id: 2,
		name: 'Roar Chocolate',
		icons: ['php.png', 'opencart.png'],
		repo: 'https://github.com/s33dco/roarchocolate',
		repoAlt: 'view the repo on GitHub',
		intro: 'Online store and company website for a raw food chocolatiere.',
		paras: [
			'A cusotmized install of the PHP Opencart ecommerce platform.',
			"Re-templated with a bespoke CSS to harmonize with the company's product packaging."
		]
	},
	{
		id: 1,
		name: 'Board Leaves',
		icons: ['php.png', 'wp.png'],
		repo: 'https://github.com/s33dco/broadleaves',
		repoAlt: 'view the repo on GitHub',
		intro: 'A Woodland management blog for the Sussex based tree surgeon.',
		paras: ['A Wordpress install with customized CSS.']
	}
]