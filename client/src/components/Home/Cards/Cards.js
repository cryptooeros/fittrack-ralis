import { LifebuoyIcon, ScaleIcon, HeartIcon, FireIcon } from '@heroicons/react/24/outline'

const supportLinks = [
  {
    name: 'Fat Burning',
    href: '#',
    description:
      'This program is suitable for you who wants to get rid of your fat and lose their weight.',
    icon: FireIcon,
  },
  {
    name: 'Health Fitness',
    href: '#',
    description:
      'This program is designed for those who exercise only for thier body fitness and not body building. ',
    icon: ScaleIcon,
  },
  {
    name: 'Cardio Traning',
    href: '#',
    description:
      'In this program, you are trained to do sequential moves in range of 20 until 30 minutes.',
    icon: HeartIcon,
  },
]

export default function Example() {
  return (
    <div className="relative mt-20 bg-white" id="cards">
      {/* Overlapping cards */}
      <section className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-6 lg:px-8" aria-labelledby="contact-heading">
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col rounded-2xl bg-green shadow-xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-yellow p-5 shadow-lg">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-medium text-gray">{link.name}</h3>
                <p className="mt-4 text-lg text-gray">{link.description}</p>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                <a href={link.href} className="text-lg font-medium text-white hover:text-indigo-600">
                  Explore<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}