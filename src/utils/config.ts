export const config = {
  baseUrl: 'https://www.gerard-vergnaud.org',
} as const;

export function getLink(path: string): string {
  const trailingSlashRegex = new RegExp(/^\/|\/$/g);
  return `${config.baseUrl.replace(trailingSlashRegex, '')}/${path.replace(
    trailingSlashRegex,
    ''
  )}`;
}
