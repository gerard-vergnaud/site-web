import 'react-i18next';
import { AllNamespaces } from '../locales/types.h';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'messages';
    resources: AllNamespaces;
  }
}
