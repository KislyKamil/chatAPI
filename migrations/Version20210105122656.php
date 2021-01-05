<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210105122656 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE participant DROP FOREIGN KEY FK_D79F6B119D86650F');
        $this->addSql('ALTER TABLE participant DROP FOREIGN KEY FK_D79F6B116B92BD7B');
        $this->addSql('DROP INDEX IDX_D79F6B116B92BD7B ON participant');
        $this->addSql('DROP INDEX IDX_D79F6B119D86650F ON participant');
        $this->addSql('ALTER TABLE participant ADD user_id INT NOT NULL, ADD conversation_id INT NOT NULL, DROP user_id_id, DROP conversation_id_id');
        $this->addSql('ALTER TABLE participant ADD CONSTRAINT FK_D79F6B11A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE participant ADD CONSTRAINT FK_D79F6B119AC0396 FOREIGN KEY (conversation_id) REFERENCES conversation (id)');
        $this->addSql('CREATE INDEX IDX_D79F6B11A76ED395 ON participant (user_id)');
        $this->addSql('CREATE INDEX IDX_D79F6B119AC0396 ON participant (conversation_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE participant DROP FOREIGN KEY FK_D79F6B11A76ED395');
        $this->addSql('ALTER TABLE participant DROP FOREIGN KEY FK_D79F6B119AC0396');
        $this->addSql('DROP INDEX IDX_D79F6B11A76ED395 ON participant');
        $this->addSql('DROP INDEX IDX_D79F6B119AC0396 ON participant');
        $this->addSql('ALTER TABLE participant ADD user_id_id INT NOT NULL, ADD conversation_id_id INT NOT NULL, DROP user_id, DROP conversation_id');
        $this->addSql('ALTER TABLE participant ADD CONSTRAINT FK_D79F6B119D86650F FOREIGN KEY (user_id_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE participant ADD CONSTRAINT FK_D79F6B116B92BD7B FOREIGN KEY (conversation_id_id) REFERENCES conversation (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_D79F6B116B92BD7B ON participant (conversation_id_id)');
        $this->addSql('CREATE INDEX IDX_D79F6B119D86650F ON participant (user_id_id)');
    }
}
