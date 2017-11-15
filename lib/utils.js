/**
 * Created by htomaka on 15/11/17.
 */
export const isError = (either) => {
  return either.isLeft();
};
