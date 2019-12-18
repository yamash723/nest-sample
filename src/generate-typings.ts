import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const isWatch = process.argv[2] === '--watch';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.ts'),
  outputAs: 'class',
  watch: isWatch,
});
