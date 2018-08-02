import path from 'path';

export default {
  entries: ['customers'],
  output_dir: path.join(__dirname,'web') // 左記のように設定すればDropboxや外部のディレクトリにbuild後のファイルを設置できます。
}
