'use client';

let result: string = 'none';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            test
            <TestButton />
        </main>
    )
}

const TestButton = () => {
    return <button className='test-button' onClick={ GetRequest } data-url='http://localhost:13000/api/test'>GET start</button>
}

async function GetRequest(e: React.MouseEvent) {
    const targetURL = e.currentTarget.getAttribute('data-url');
    if(targetURL == null || targetURL == '')
        alert('URLError!');
    else{
        await fetch(targetURL, {
            method: 'GET'
        }).then(
            response => {
                if (response.status != 200) {
                    alert('エラー');
                } else {
                    return response.json();
                }
            }
        )
        .then((jsonData) => {
            if (jsonData != null) {
                const status = jsonData['status'];
                if ( status == 'ok') {
                    result = status;
                } else {
                    result = 'ステータスエラー';
                }
            } else {
                result = 'レスポンスエラー';
            }
        })
        .catch(error => {
            result = 'catch!';
        });

        let resultField = document.getElementById('result-field');
        if(resultField)
        resultField.innerText = result;
    }
}