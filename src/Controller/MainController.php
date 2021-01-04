<?php


namespace App\Controller;


use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    public function __construct()
    {
    }

    /**
     * @Route ("/home")
     * @param EntityManagerInterface $entityManager
     * @param UserRepository $userRepository
     * @return JsonResponse
     */

    public function homeData(EntityManagerInterface $entityManager, UserRepository $userRepository): JsonResponse
    {
        $user = new User();
        $user->setUsername("TEST")
            ->setEmail("test@o2.pl")
            ->setPassword("test")
            ->setRoles(array("ADMIN", "USER"));

//        $entityManager->persist($user);
        $entityManager->flush();

        dump($userRepository->find(1));
        return $this->json(['username' => 'jane.doe']);
    }


}