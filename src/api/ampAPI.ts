import { GraphQLResult } from "@aws-amplify/api";
import { API, graphqlOperation } from "aws-amplify";

async function ampAPI<Response, Variables>(query: string, variables: Variables): Promise<Response> {
  const results = (await API.graphql(graphqlOperation(query, variables))) as GraphQLResult<Response>;
  return results.data as Response;
}

export default ampAPI;
