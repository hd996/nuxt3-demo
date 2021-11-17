export default async (_req, _res, next: () => void) => {
  console.log('auth mid...')
  await next()
}
