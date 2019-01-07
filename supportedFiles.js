/* eslint-disable object-curly-newline */
module.exports = {
  // images
  'image/png': { name: 'PNG Image', icon: 'file-image', ext: ['png'], view: 'imageView' },
  'image/jpeg': { name: 'JPEG Image', icon: 'file-image', ext: ['jpg', 'jpeg'], view: 'imageView' },
  'image/gif': { name: 'GIF Image', icon: 'file-image', ext: ['gif'], view: 'imageView' },
  'image/svg+xml': { name: 'SVG Image', icon: 'file-image', ext: ['svg'], view: 'imageView', edit: 'textEdit', opts: { lang: 'xml' } },
  // video files
  'video/mp4': { name: 'MP4 Video', icon: 'file-video', ext: ['mp4', 'mpeg4'], view: 'video' },
  'video/x-flv': { name: 'FLV Video', icon: 'file-video', ext: ['flv'], view: 'video' },
  'video/x-motion-jpeg': { name: 'Motion JPEG Video', icon: 'file-video', ext: ['mjpg'], view: 'video' },
  // audio
  'audio/mpeg3': { name: 'MP3 Audio', icon: 'file-audio', ext: ['mp3', 'mpeg3'], view: 'audio' },
  'audio/x-wav': { name: 'WAV Audio', icon: 'file-audio', ext: ['wav'], view: 'audio' },
  // archives
  'application/zip': { name: 'ZIP Archive', icon: 'file-archive', ext: ['zip'], view: 'download' },
  'application/x-gzip': { name: 'GZIP Archive', icon: 'file-archive', ext: ['gzip'], view: 'download' },
  'application/x-tar': { name: 'TAR Archive', icon: 'file-archive', ext: ['tar'], view: 'download' },
  'application/x-7z-compressed': { name: '7ZIP Archive', icon: 'file-archive', ext: ['7z'], view: 'download' },
  // data
  'application/json': { name: 'JSON File', icon: 'file-spreadsheet', ext: ['json'], view: 'textView', edit: 'textEdit', opts: { lang: 'json' } },
  'text/csv': { name: 'CSV File', icon: 'file-spreadsheet', ext: ['csv'], view: 'textView', edit: 'textEdit', opts: { lang: 'csv' } },
  'text/plain': { name: 'Plain Text', icon: 'file-alt', ext: ['txt', 'text'], view: 'textView', edit: 'textEdit', opts: { lang: 'text' } },
  'text/tab-separated-values': { name: 'TSV File', icon: 'file-spreadsheet', ext: ['tsv'], view: 'textView', edit: 'textEdit', opts: { lang: 'tsv' } },
  // docs
  'application/pdf': { name: 'PDF Document', icon: 'file-spreadsheet', ext: ['pdf'], view: 'pdf' },
  'application/x-latex': { name: 'LaTeX Document', icon: 'file-invoice', ext: ['latex'], view: 'textView', edit: 'textEdit', opts: { lang: 'latex' } },
  'text/markdown': { name: 'Markdown Document', icon: 'file-invoice', ext: ['md'], view: 'markdown', edit: 'markdown' },
  // ms docs
  'application/msword': { name: 'Microsoft Word Document', icon: 'file-word', ext: ['doc', 'dot'], view: 'download' },
  'application/vnd.ms-excel': { name: 'Microsoft Excel Document', icon: 'file-spreadsheet', ext: ['xls', 'xlt', 'xla'], view: 'download' },
  'application/vnd.ms-powerpoint': { name: 'Microsoft Power Point Document', icon: 'file-powerpoint', ext: ['ppt', 'ppa', 'pps', 'pot'], view: 'download' },
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': { name: 'Word Document', icon: 'file-word', ext: ['docx'], view: 'download' },
  'application/vnd.openxmlformats-officedocument.wordprocessingml.template': { name: 'Word Document Template', icon: 'file-word', ext: ['dotx'], view: 'download' },
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': { name: 'Spreadsheet Document', icon: 'file-spreadsheet', ext: ['xlsx'], view: 'download' },
  'application/vnd.openxmlformats-officedocument.spreadsheetml.template': { name: 'Spreadsheet Document Template', icon: 'file-spreadsheet', ext: ['xltx'], view: 'download' },
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': { name: 'Power Point Document', icon: 'file-powerpoint', ext: ['pptx'], view: 'download' },
  'application/vnd.openxmlformats-officedocument.presentationml.template': { name: 'Power Point Document Template', icon: 'file-powerpoint', ext: ['potx'], view: 'download' },
  'application/vnd.openxmlformats-officedocument.presentationml.slideshow': { name: 'Power Point Document Slideshow', icon: 'file-powerpoint', ext: ['ppsx'], view: 'download' },
  // code
  'application/x-javascript': { name: 'JavaScript File', icon: 'js', stack: true, ext: ['js'], view: 'textView', edit: 'textEdit', opts: { lang: 'js' } },
  'text/css': { name: 'CSS File', icon: 'css', stack: true, ext: ['css'], view: 'textView', edit: 'textEdit', opts: { lang: 'css' } },
  'text/x-script.python': { name: 'Python File', icon: 'python', stack: true, ext: ['py'], view: 'textView', edit: 'textEdit', opts: { lang: 'python' } },
  'application/x-bytecode.python': { name: 'Python Binary', icon: 'cogs', stack: true, ext: ['pyc'], view: 'download' },
  'text/x-java-source': { name: 'Java File', icon: 'java', stack: true, ext: ['java', 'jav'], view: 'textView', edit: 'textEdit', opts: { lang: 'java' } },
  'application/java-archive': { name: 'Java JAR Archive', icon: 'cogs', stack: true, ext: ['jar'], view: 'download' },
  // misc
  'text/uri-list': { name: 'Link', icon: 'external-link-square', ext: ['uni', 'uri'], view: 'link', edit: 'link' },
  'text/x-comment': { name: 'Comment', icon: 'comment-alt-lines', stack: true, ext: ['comment'], view: 'markdown', edit: 'markdown' },
  'text/x-directory': { name: 'Directory', icon: 'folder', ext: ['directory'], view: 'directory' },
};
