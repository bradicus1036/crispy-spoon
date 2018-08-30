'use babel';

// data source is an array of objects
import suggestions from '../data/loan';

class LoanProvider {
	constructor() {
		// offer suggestions only when editing repgen files
		this.selector = '.source.repgen';

		// except when editing a comment within a repgen file
		this.disableForSelector = '.source.repgen .comment';

		// make these suggestions appear above default suggestions
		this.suggestionPriority = 5;
	}

	getSuggestions(options) {
		const { prefix } = options;

		// only look for suggestions after 3 characters have been typed
		if (prefix.length >= 3) {
			return this.findMatchingSuggestions(prefix);
		}
	}

	findMatchingSuggestions(prefix) {
		// filter list of suggestions to those matching the prefix, case insensitive
		let prefixLower = prefix.toLowerCase();
		let matchingSuggestions = suggestions.filter((suggestion) => {
			let textLower = suggestion.text.toLowerCase();
			return textLower.startsWith(prefixLower);
		});

		// run each matching suggestion through inflateSuggestion() and return
		return matchingSuggestions.map(this.inflateSuggestion);
	}

	// clones a suggestion object to a new object with some shared additions
	// cloning also fixes an issue where selecting a suggestion won't insert it
	inflateSuggestion(suggestion) {
		if (suggestion.iconHTML == '') {
		 return {
			 text: suggestion.text,
			 snippet: suggestion.snippet,
			 type: suggestion.type,
			 displayText: suggestion.displayText,
			 leftLabelHTML: suggestion.leftLabelHTML,
			 rightLabelHTML: suggestion.rightLabelHTML
		 }
		}
		else {
			return {
		 		text: suggestion.text,
				snippet: suggestion.snippet,
			 	type: suggestion.type,
			 	displayText: suggestion.displayText,
			 	leftLabelHTML: suggestion.leftLabelHTML,
			 	rightLabelHTML: suggestion.rightLabelHTML,
				iconHTML: suggestion.iconHTML
			}
    }
	}
}
export default new LoanProvider();
