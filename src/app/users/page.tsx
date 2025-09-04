import { Button } from '@/components/ui/button'
import Link from 'next/link'

const UserPage = () => {
    return (
        <div className=''>
            <Button>
                <Link href={'users/123'}>Usuario 123</Link>
            </Button>
        </div>
    )
}

export default UserPage