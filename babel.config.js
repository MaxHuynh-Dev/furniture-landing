import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dev = process.env.NEXT_PUBLIC_APP_ENV !== 'production';

const stylexAliases = {
  '@/*': [path.join(__dirname, 'src', '*')],
  '@Api/*': [path.join(__dirname, 'src', 'api', '*')],
  '@Styles/*': [path.join(__dirname, 'src', 'styles', '*')],
  '@Animation/*': [path.join(__dirname, 'src', 'animation', '*')],
  '@Components/*': [path.join(__dirname, 'src', 'components', '*')],
  '@Modules/*': [path.join(__dirname, 'src', 'modules', '*')],
  '@Services/*': [path.join(__dirname, 'src', 'services', '*')],
  '@Contexts/*': [path.join(__dirname, 'src', 'contexts', '*')],
  '@Layout/*': [path.join(__dirname, 'src', 'layout', '*')],
  '@Hooks/*': [path.join(__dirname, 'src', 'hooks', '*')],
  '@Constants/*': [path.join(__dirname, 'src', 'constants', '*')],
  '@Images/*': [path.join(__dirname, 'public', 'images', '*')],
  '@Public/*': [path.join(__dirname, 'public', '*')],
  '@Utils/*': [path.join(__dirname, 'src', 'utils', '*')],
  '@Motions/*': [path.join(__dirname, 'src', 'motions', '*')],
  '@Store/*': [path.join(__dirname, 'src', 'store', '*')],
  '@Interactive/*': [path.join(__dirname, 'src', 'interactive', '*')],
  '@Enums/*': [path.join(__dirname, 'src', 'enums', '*')],
};


export default {
  presets: ['next/babel'],
  plugins: [
    [
      '@stylexjs/babel-plugin',
      {
        dev,
        runtimeInjection: false,
        enableInlinedConditionalMerge: true,
        treeshakeCompensation: true,
        aliases: stylexAliases,
        unstable_moduleResolution: { type: 'commonJS' },
        // ... other StyleX configuration
      },
    ],
  ],
};