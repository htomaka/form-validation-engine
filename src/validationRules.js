/**
 * Created by htomaka on 11/11/17.
 */
import * as assert from '../lib/assertions';

export const validationRules = state => ({
  username() {
    return assert.isNotEmpty(state.username)
            .chain(x => {
              return assert.isLongEnough(x, 5);
            });
  },
  password() {
    return assert.isNotEmpty(state.password);
  }
});

