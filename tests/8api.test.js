import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'parallel' }); // 👈 Enable parallel execution for this file

test.describe('API Testing with Playwright', () => {

  test('GET Request - Fetch Posts', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    
    expect(response.status()).toBe(200); // Check status code
    const responseBody = await response.json();
    
    expect(responseBody.id).toBe(1); // Validate response body
    expect(responseBody).toHaveProperty('title'); // Ensure property exists
  });

  test('POST Request - Create a Post', async ({ request }) => {
    const newPost = { title: 'Playwright Test', body: 'API Testing', userId: 1 };
    
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: newPost,
    });

    expect(response.status()).toBe(201); // Check if created
    const responseBody = await response.json();
    
    expect(responseBody.title).toBe(newPost.title);
    expect(responseBody.body).toBe(newPost.body);
  });

  test('PUT Request - Update a Post', async ({ request }) => {
    const updatedPost = { title: 'Updated Title', body: 'Updated Content', userId: 1 };
    
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
      data: updatedPost,
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    
    expect(responseBody.title).toBe(updatedPost.title);
  });

  test('DELETE Request - Remove a Post', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);
  });

});
