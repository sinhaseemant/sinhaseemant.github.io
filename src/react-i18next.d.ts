// import the original type declarations
import 'react-i18next';
// import all namespaces (for the default language, only)
import ns1 from 'i18n/fr/common.json';

declare module 'react-i18next' {
    // and extend them!
    interface Resources {
        ns1: typeof ns1;
    }
}