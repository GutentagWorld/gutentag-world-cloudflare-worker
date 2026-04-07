export default {
  async fetch(request: Request): Promise<Response> {
    return new Response('Gutentag, World!', {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  },
}
