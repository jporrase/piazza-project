import requests

# Base URL of Piazza
base_url = 'http://localhost:3000'

# Test POST endpoint 1
def test_post_endpoint():
    url = f'{base_url}/post'
    data = {
        'title': 'Netflix goes up 20%',
        'topic': 'Tech',
        'messagebody': 'This is a test message.....'
    }
    response = requests.post(url, json=data)
    print(response.json())

# Test POST endpoint 2
def test_post_endpoint1():
    url = f'{base_url}/post'
    data = {
        'title': 'Facebook closes highest ever..',
        'topic': 'Tech',
        'messagebody': 'This is a test message.....'
    }
    response = requests.post(url, json=data)
    print(response.json())




''' Only one function for the Get and Delete due to their universal nature'''

# Test GET endpoint
def test_get_endpoint():
    url = f'{base_url}/post'
    response = requests.get(url)
    print(response.json())

# Test DELETE all endpoint
def test_delete_all_endpoint():
    url = f'{base_url}/post'
    response = requests.delete(url)
    print(response.json())




# Test DELETE by ID endpoint
def test_delete_by_id_endpoint():
    # First, create a test post to get its ID
    create_post_url = f'{base_url}/post'
    data = {
        'title': 'Test Post for Deletion',
        'topic': 'Test Topic',
        'messagebody': 'This is a test message for deletion'
    }
    create_response = requests.post(create_post_url, json=data)
    post_id = create_response.json()['_id']
    # Now, delete the post by its ID
    delete_url = f'{base_url}/post/{post_id}'
    response = requests.delete(delete_url)
    print(response.json())

# Test PATCH endpoint
def test_patch_endpoint():
    # First, create a test post to update
    create_post_url = f'{base_url}/post'
    data = {
        'title': 'Test Post for Update',
        'topic': 'Test Topic',
        'messagebody': 'This is a test message for update'
    }
    create_response = requests.post(create_post_url, json=data)
    post_id = create_response.json()['_id']
    # Now, update the post
    patch_url = f'{base_url}/post/{post_id}'
    updated_data = {
        'title': 'Updated Test Post',
        'topic': 'Updated Test Topic',
        'messagebody': 'This is an updated test message'
    }
    response = requests.patch(patch_url, json=updated_data)
    print(response.json())

# Execute the tests
test_post_endpoint()
test_post_endpoint1()
test_get_endpoint()
test_delete_all_endpoint()
test_delete_by_id_endpoint()
test_patch_endpoint()
