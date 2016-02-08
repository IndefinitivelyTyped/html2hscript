import { Stream } from 'stream'

declare function html2hscript(stream: Stream, callback: (err: Error, result: string) => void)

export = html2hscript
