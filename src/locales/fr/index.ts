import { AllNamespaces } from '../types.h';
import messages from './messages';

const allNamespaces: AllNamespaces & { [key: string]: any } = {
  messages,
};

export default allNamespaces;
