import { escapeFormat } from '../../core/badge-urls/path-helpers.js'
import { BaseStaticService } from '../index.js'

const description = `
静态徽章接受一个必需的路径参数，该参数编码了以下内容：

<ul>
  <li>
    标签、信息和颜色用破折号 <code>-</code> 分隔。例如：<br />
    <img alt="任何文本：你喜欢的" src="https://img.shields.io/badge/any_text-you_like-blue"  /> -
    https://img.shields.io/badge/any_text-you_like-blue 
  </li>
  <li>
    仅信息和颜色，用破折号 <code>-</code> 分隔。例如：<br />
    <img alt="只有信息" src="https://img.shields.io/badge/just%20the%20message-8A2BE2"  /> -
    https://img.shields.io/badge/just%20the%20message-8A2BE2 
  </li>
</ul>

<table>
  <tbody>
    <tr>
      <th>URL 输入</th>
      <th>徽章输出</th>
    </tr>
    <tr>
      <td>下划线 <code>_</code> 或 <code>%20</code></td>
      <td>空格 <code>&nbsp;</code></td>
    </tr>
    <tr>
      <td>双下划线 <code>__</code></td>
      <td>下划线 <code>_</code></td>
    </tr>
    <tr>
      <td>双破折号 <code>--</code></td>
      <td>破折号 <code>-</code></td>
    </tr>
  </tbody>
</table>

可以使用十六进制、rgb、rgba、hsl、hsla 和 css 命名颜色。
`

export default class StaticBadge extends BaseStaticService {
  static category = 'static'
  static route = {
    base: '',
    format: '(?::|badge/)((?:[^-]|--)*?)-?((?:[^-]|--)*)-((?:[^-.]|--)+)',
    capture: ['label', 'message', 'color'],
  }

  static openApi = {
    '/badge/{badgeContent}': {
      get: {
        summary: 'Static Badge',
        description,
        parameters: [
          {
            name: 'badgeContent',
            description:
              'Label, (optional) message, and color. Separated by dashes',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            example: 'build-passing-brightgreen',
          },
        ],
      },
    },
  }

  handle({ label, message, color }) {
    return { label: escapeFormat(label), message: escapeFormat(message), color }
  }
}
