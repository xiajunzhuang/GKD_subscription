import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 233,
  name: 'xiajunzhuang的订阅',
  version: 0,
  author: 'xiajunzhuang',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/xiajunzhuang/GKD_subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
