import { toast } from 'sonner'

type Props = {
  img: string
}

export const Header = ({ img }: Props) => {
  const onLinkClick = () => {
    const currentUrl = window.location.href

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        toast.success('현재 페이지의 URL이 클립보드에 복사되었습니다.')
      })
      .catch(() => {
        toast.error('클립보드에 복사하는 중 오류가 발생했습니다.')
      })
  }

  return (
    <div className='relative h-[400px]'>
      <img
        src='/pb.png'
        alt='pb'
        className='object-cover h-[400px] w-full'
        onClick={onLinkClick}
      />
      <img
        src='/logo.png'
        alt='logo'
        className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[333px]'
      />
      <img
        src={img}
        className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 rounded-full md:w-[155px] w-[111px]'
      />
    </div>
  )
}
