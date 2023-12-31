import { DocumentType } from '@typegoose/typegoose';
import { CreateOfferDTO } from './dto/create-offer.dto.js';
import { OfferEntity } from './offer.entity';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { DocumentExistsInterface } from '../../middleware/document-exist.interface.js';
import { UpdateOfferRatingDto } from './dto/update-offer.rating.dto.js';

export interface OfferServiceInterface extends DocumentExistsInterface {
    create(data: CreateOfferDTO): Promise<DocumentType<OfferEntity>>;
    findById(id: string): Promise<DocumentType<OfferEntity> | null>;
    find(limit: number): Promise<DocumentType<OfferEntity>[]>;
    deleteById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
    updateById(
        offerId: string,
        dto: UpdateOfferDto,
    ): Promise<DocumentType<OfferEntity> | null>;
    updateRatingById(offerId: string, dto: UpdateOfferRatingDto): Promise<void>;
    incCommentCount(offerId: string): Promise<DocumentType<OfferEntity> | null>;
    exists(documentId: string): Promise<boolean>;
}
