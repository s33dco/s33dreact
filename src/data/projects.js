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
		id: 12,
		name: 'AccountsDept',
		icons: ['react.png', 'redux.png', 'express.png', 'mongo.png'],
		repo: 'https://github.com/s33dco/invexpapi',
		repoAlt: 'view the repo on GitHub',
		site: '',
		siteAlt: '',
		intro: 'Making self employment and running your business easy.',
		paras: [
			'Take the stress out off self employment and run your business from your phone.',
			'Know your exact tax position on a day to day basis. Create, email and download invoices, keep track of cash flow and expenses and view previous work by client, download reports by date and take care of that tax return.'
		]
	},
	{
		id: 11,
		name: 'bbc10',
		icons: ['ruby.png'],
		gem: 'https://rubygems.org/gems/bbc10',
		gemAlt: 'visit on RubyGems',
		npm: '',
		npmAlt: 'see package on NPM',
		repo: 'https://github.com/s33dco/bbc10',
		repoAlt: 'view the repo on GitHub',
		site: '',
		siteAlt: '',
		intro:
			"Scraping the BBC's ten most read stories to your terminal window with Ruby.",
		paras: [
			'Relying on Nokogiri BBC10 heads over to the the BBC News website, identifies the ten most read stories, scrapes the pages and delivers them to your terminal window.',
			'There are no bells or whistles, simply the stories delivered to your screen. A great way to check the news, works best piped to less. The package is free to use and available as a Ruby gem.'
		]
	},
	{
		id: 10,
		name: 's33d',
		icons: ['js.png', 'webpack.png', 'react.png'],
		repo: 'https://github.com/s33dco/s33dreact',
		repoAlt: 'view the repo on GitHub',
		intro: 'A single page app online portfolio and contact page.',
		paras: [
			'A JAMstack single page app built with a webpacked React frontend and deployed as a static site on Netlify using a serverless AWS Lambda function for the contact page.',
			'A simple flex(box)ible design.'
		]
	},
	{
		id: 9,
		name: 'SME',
		icons: ['js.png', 'node.png', 'express.png', 'mongo.png'],
		repo: 'https://github.com/s33dco/sme',
		repoAlt: 'view the repo on GitHub',
		intro:
			'A website with an invoice generating and expense tracking back end.',
		paras: [
			'Built to take the hassle out of being self-employed SME is a company website with contact page, coupled with a secure back end to handle invoicing and HMRC tax returns.',
			'The mobile friendly app enables the user to create and print or email invoices aswell as track of expenses from a mobile phone.',
			'Reports can be pulled by date range and downlaoded, previous invoiced items can be viewed under each client page providing a work history. All expenses are broken down via HMRC categories to assist the end of year tax return.',
			'The Express app has a MongoDB backend, templated with EJS on the front and tested with Jest.'
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
		intro:
			'Weather summary in your terminal for anywhere, anytime in any language.',
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
			'Making use of the promised based HTTP client Axios and the browser emulator JSDOM BBCtopten heads over to the the BBC News website, identifies the ten most read stories, scrapes the pages and delivers them to your terminal window.',
			'There are no bells or whistles, simply the stories delivered to your screen. A great way to check the news, works best piped to less. The package is free to use and available on npm.'
		]
	},
	{
		id: 6,
		name: 'Auction',
		icons: ['ruby.png', 'rails.png'],
		repo: 'https://github.com/s33dco/auction',
		repoAlt: 'view the repo on GitHub',
		intro:
			'An app to make, manage and administer private auctions for export sales.',
		paras: [
			"An invitation only auction site developed so sales can be set up quickly and easily from a smart phone. Used to manage export auctions on a 'best bid first' basis the app is not an Ebay derivative, more of a private sales network.",
			'The App supports multiple auciton houses and sale types which can be started at the click of a button.Whilst the sale is live bid data can be viewed by the Auctioneer on the lots.',
			'Once the sale is closed commision are calculated and invoices/credit notes are emailed to the respective buyers and sellers. Previous bids are stored on the db so future lots can be valued easily.',
			'The app has a public frontend with general information and a contact page with protected routes for autheticated users, users are authorized on a per sale type basis, be that buyers or sellers.',
			'The admins, (Auctioneers) only have crud access to the data.',
			'Fully tested with Rspec and ready to go. Get in touch to view the live site.'
		]
	},
	{
		id: 5,
		name: 'DHP',
		icons: ['ruby.png', 'rails.png'],
		intro: 'App upgrade and addition of mobile friendly responsive design.',
		paras: [
			"Updating the Greek based English bookseller's online store from Rails 3.1 to Rails 5.2 to take advantage of Active Storage and othe Rails enhancements.",
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
			'Built from scratch this Rails app was designed to take the stress out of managing a Housing Coop.',
			"The app keep tracks of the Co-op's finances, (rent payments and maintenance costs per property), both of which can be reported on to assist budgeting plans",
			'Also participation is tracked, with regard to attendance of meetings and roles taken within the Co-op.',
			'The app has a public frontend with general information and a contact page with protected routes for autheticated members, only authorised members have crud access to the data.',
			'Fully tested with Rspec and ready to go. Get in touch to view the live site.'
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
		intro:
			'A statement profiler and analyizer, import CSV files, export a understanding.',
		paras: [
			"Banco was written to summarize and profile csv files downloaded from online banks, we've all wondered where the money goes and this gem provides a simple solution to the question.",
			"The app compares the description/name of the transactions, accumulating the totals for the same string names, you're welcome to increase the string length it matches should you need but though testing it seems spot on.",
			'Once your csv file is read in understanding is exported via a number of reports. You can instantly see the bottom line, review the summarized money in / money out, review the transactions indiviually and write all the details to a file. Everything is ordered in descending value with the details presented on your terminal window. Written in Ruby with no dependencies the Banco gem runs from your command line and is available.',
			"Just type 'gem install banco' and you're good to go."
		]
	},
	{
		id: 2,
		name: 'Roar',
		icons: ['php.png', 'opencart.png'],
		repo: 'https://github.com/s33dco/roarchocolate',
		repoAlt: 'view the repo on GitHub',
		intro: 'Online store and company website for a raw food chocolatiere.',
		paras: [
			'A customized install of the PHP Opencart ecommerce platform.',
			"Re-templated with a bespoke CSS to harmonize with the company's product packaging and branding."
		]
	},
	{
		id: 1,
		name: 'Broad Leaves',
		icons: ['php.png', 'wp.png'],
		repo: 'https://github.com/s33dco/broadleaves',
		repoAlt: 'view the repo on GitHub',
		intro: 'A Woodland management blog for the Sussex based tree surgeon.',
		paras: [
			'A Wordpress install with customized CSS and a few standard WP plugins.'
		]
	}
];
