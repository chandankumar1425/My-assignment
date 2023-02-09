import { getUsersObj, exampleInputArray1, getMassagedUsers, exampleInputArray2 } from '../index';
global.score = 1

describe('Test', function(){

  test('output from getUsersObj to match expected shape', function(){
    expect(getUsersObj(exampleInputArray1)).toMatchObject({ John: 1, Pete: 2, Mary: 3 });
    global.score += 5;
  })

  test('output from getMassagedUsers to match expected shape', function(){
    expect(getMassagedUsers(exampleInputArray2)).toMatchObject([
      { fullName: 'John Smith', id: 1 },
      { fullName: 'Pete Hunt', id: 2 },
      { fullName: 'Mary Key', id: 3 }
    ]);
    global.score += 4;
  })

})

afterAll(() => {
  console.log("Final Score is", global.score);
});
