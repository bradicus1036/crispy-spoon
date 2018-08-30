'use babel';

import FunctionProvider from './function-provider';
import LoanProvider from './loan-provider';
import ShareProvider from './share-provider';

export default {
    getProvider() {
        // return a single provider, or an array of providers to use together
        return [FunctionProvider,LoanProvider,ShareProvider];
    }
};
