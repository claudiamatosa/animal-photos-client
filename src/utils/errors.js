export const extractGraphQLError = error => {
  const { graphQLErrors } = error;
  const [errorDetails] = graphQLErrors || [error];
  return errorDetails;
};
