import { promisify } from '../';
import { strictEqual } from 'assert';

describe('promisify', () => {
  it('should resolve promise on standard callback', () => {
    const test = {
      withCallback: cb=>cb(null, 'test')
    }

    return promisify(test,'withCallback')()
      .then(response=>{
        strictEqual(response, 'test');
      })
  });

  it('returns reject promise on standard callback with error', () => {
    const test = {
      withCallback: cb=>cb('test')
    }

    return promisify(test,'withCallback')()
      .catch(err=>{
        strictEqual(err, 'test');
      })
  });

});
